import React from 'react'
import styles from '../../styles/listingform.module.scss';

const PersonalInformation = ( {watch, register} ) => {

    const watchName = watch("name");
    const watchEmail = watch("email");
    const watchAddress = watch("address");

    return (
        <>
            <div className={styles.inputField}>
                <label for="name">User Name</label>
                <input type="text" name="name" {...register('name')}></input>
            </div>

            <div className={styles.inputField}>
                <label for="email">Email</label>    
                <input type="email" name="email" {...register("email")}></input>
            </div>

            <div className={styles.inputField}>
                <label for="address">Address</label>
                <input type="text" name='address' {...register("address")}></input>
            </div>
        </>
    )
}

export default PersonalInformation