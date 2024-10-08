'use client'
import { useState } from 'react';

export default function FormDeneme()
{
    const [ad, setAd] = useState("");
    return(
        <form>
            <label>Adınız:
                <input type="text" 
                    value={ad} 
                    onChange={(e) => setAd(e.target.value)}
                />
            </label>
            <h1>{ad}</h1>
        </form>
    )
}