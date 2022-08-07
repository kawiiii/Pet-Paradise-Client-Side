import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import FormData from 'form-data';

import styles from "../styles/listingform.module.scss";

import PersonalInformation from "../components/ListingForm/PersonalInformation";
import PetInformation from '../components/ListingForm/PetInformation';
import generateSchema from '../utils/yup-listingform';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewListing = () => {

    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const totalSteps = 2;

    const {watch, register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(generateSchema(step))
    });

    const onSubmit = (data) => {
        console.log("Data: ", data);

        if (step === totalSteps) {
            sendData(data);
        }
        else {
            changeStep('forward');
        }
        
    }

    const onError = (errors) => {
        console.log("Errors: ", errors);
    }

    const sendData = async (data) => {
        
        const url = 'http://localhost:3001/add-listing';
        
        
        axios.post(url, data).then((response) => {
            console.log(response.data);
            setFormSubmitted(true);
        });

    }


    const changeStep = (direction) => {
        // console.log(direction);
        if (direction === "forward") {
            setStep( prev => prev + 1);
        }
        else if (direction === "backward") {
            if (step === 1) {
                navigate(-1);
            }
            else {
                console.log("In ELse Else", step);
                setStep( prevStep => prevStep - 1);
            }
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInformation watch={watch} register={register} />;
            case 2:
                return <PetInformation watch={watch} register={register} />
            default:
                return <PersonalInformation watch={watch} register={register} />;
        }
    }

    return (
    <>
        <Navbar />
        {!formSubmitted &&
            <div className={styles.mainContainer}>
                <h1>Add New Listing</h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        {renderStep()}
                        <div className={styles.btnGroup}>
                            <button className={styles.backBtn} type='button' onClick={() => changeStep("backward")}>Back</button>
                            <button className={styles.nextBtn} type='submit'>{step === totalSteps ? "Submit" : "Next"}</button>
                        </div>
                    </form>
                </div>
            </div>
        }
        {formSubmitted && 
            <div className={styles.mainContainer}>
                <h1>Form Submitted</h1>
            </div>
        }
        <Footer />
    </>
)
}

export default NewListing