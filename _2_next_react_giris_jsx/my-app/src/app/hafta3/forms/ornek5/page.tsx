'use client'
import { useState } from 'react';

export default function FormDeneme()
{
    const [ad, setAd] = useState("");

    const submitiYonet = (event:any) => {
        event.preventDefault();
        alert(`Adnizi: ${ad}`)
      }
    
    return(
        <form onSubmit={submitiYonet}>
            <label>Adınız:
                <input type="text" 
                    value={ad} 
                    onChange={(e) => setAd(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}