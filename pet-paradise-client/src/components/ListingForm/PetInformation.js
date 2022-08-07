import React, { useEffect, useState } from 'react';
import styles from '../../styles/listingform.module.scss';

const PetInformation = ( {watch, register} ) => {
  
    const watchDesc = watch("desc");
    const watchImages = watch("images") || [];

    return (
        <>
            <div className={styles.inputField}>
                <label for="age">Pet Age (in Months)</label>
                <input type="number" {...register('age')}></input>
            </div>
            
            <div className={styles.radioContainer}>
                {
                    ["Cat", "Dog"].map( (value, index) => (
                        
                        <button type='button' className={styles.radioBtn} value={value} name="petType" {...register('petType')}>{value}</button>
                    ))
                
                }

            </div>
            
            <div className={styles.inputField}>
                <label for="description">Description</label>
                <textarea name="description" {...register('desc')}></textarea>
            </div>

        </>
)
}

export default PetInformation