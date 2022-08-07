import React, { useEffect, useState } from 'react';
import styles from '../../styles/listingform.module.scss';

const PetInformation = ( {watch, register} ) => {
    
    const [selectedRadio, setSelectedRadio] = useState(null);

    const watchDesc = watch("desc");
    const watchPet = watch("petType");
    const watchImages = watch("images") || [];


    const updateSelected = (e) => {
        // console.log(e.target.value);
        setSelectedRadio(e.target.value);
    }

    return (
        <>
            <div className={styles.inputField}>
                <label for="age">Pet Age (in Months)</label>
                <input type="number" {...register('age')}></input>
            </div>
            
            <div className={styles.radioContainer}>
                <label htmlFor='petType' className={styles.petTypeLabel}>Pet Type</label>
                <div className={styles.radioBtnContainer}>
                    {
                        ['Cat', 'Dog'].map( (value, index) => (
                            <label className={selectedRadio === value ? styles.radioActive : styles.radioBtn}>
                                <input type="radio"  
                                        data={value} name={value} value={value} 
                                        onClick={ e => updateSelected(e) } {...register('petType')}>

                                </input>
                                {value}
                            </label>
                        ))
                    }
                </div>
            </div>
            
            <div className={styles.inputField}>
                <label for="description">Description</label>
                <textarea className={styles.textarea} type="text" name="description" {...register('desc')}></textarea>
            </div>

        </>
)
}

export default PetInformation