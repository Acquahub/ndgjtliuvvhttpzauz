import React from 'react';
import Link from 'next/link';
import styles from './contact.module.css';
import { Metadata } from "next";

import Image from 'next/image';


export const metadata: Metadata = {
                
}

function Contact() {
    
    
    

    return(
        <div className={styles["Contact"]}>
            
<div id="layer-4-3ca79c2c21d04d8bb027fe51c4c746ad" className={styles["layer-4-3ca79c2c21d04d8bb027fe51c4c746ad"]}    >
<div id="layer-6-a25c51ff34514e8e8e2e87f525da2084" className={styles["layer-6-a25c51ff34514e8e8e2e87f525da2084"]}    >
<div className={styles["imageview-2-118b982191f6499b958356cc1853c91e"]}  >
    <Image id="imageview-2-118b982191f6499b958356cc1853c91e" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-2" src='/assets/Santiago Black and White - Agua.png' />
</div>
</div>
</div>
<div id="layer-5-39eda45f6f7a417a8f30d954daeb6452" className={styles["layer-5-39eda45f6f7a417a8f30d954daeb6452"]}    ></div>
        </div>
    );
}

export default Contact;
            