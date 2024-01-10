'use client'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { ref, set, get, child, push, onValue, remove, update } from "firebase/database";

import YapilacakListeOgesi from "./yapilacak_liste_ogesi"

const firebaseConfig = {
  apiKey: "AIzaSyBHqsYcKtvlOfciy7Dmrqy-Vv-Az_fXsbs",
  authDomain: "todolist-16a20.firebaseapp.com",
  projectId: "todolist-16a20",
  storageBucket: "todolist-16a20.appspot.com",
  messagingSenderId: "524568699604",
  appId: "1:524568699604:web:f724909b07c0f66bc85141",
  measurementId: "G-DMSTVQ9QRV",
  databaseURL: "https://todolist-16a20-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const vt = getDatabase(app);
const vtRef = ref(vt);



function yapilacaklariKaydet(yapilacak:any) {
  push(ref(vt, 'yapilacaklar/'), yapilacak);
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const [metin, setMetin] = useState("")
  const [yapilacaklar, setYapilacaklar] = useState([])
  function kaydetTiklandi()
  {
    yapilacaklariKaydet(metin)
  }

  function burayaEris(yapilacakId:any)
  {
    console.log("İnşallah burdayız : " + yapilacakId);
    const silinecek = {};
    remove(child(vtRef, `yapilacaklar/`+yapilacakId))
  }

  function surayaEris(yapilacakId:any, yeni:any)
  {
    console.log("İnşallah burdayız : " + yapilacakId);
   
    update(child(vtRef, `yapilacaklar/`),{[yapilacakId]:yeni})
  }

  useEffect(()=>{
  get(child(vtRef, `yapilacaklar/`)).then((snapshot) => {
    if (snapshot.exists()) {
      setYapilacaklar(snapshot.val())
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  const starCountRef = ref(vt, 'yapilacaklar/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  setYapilacaklar(snapshot.val())
});

},[])


  

const a = "Merhaba"

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
        data-id="25"
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            bgcolor: '#cfe8fc', height: '100vh'
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={1}>
            <Grid item xs={6} md={8}>
              <Item>
                <TextField
                  id="standard-multiline-static"
                  label="Yapılacak?"
                  multiline
                  rows={4}
                  variant="standard"
                  onChange={(e)=>setMetin(e.target.value)}
                  value={metin}
                />

              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>
                <Button variant="outlined" onClick={kaydetTiklandi}>Kaydet</Button>
              </Item>
            </Grid>
          </Grid>
<hr></hr>
{Object.keys(yapilacaklar).map((key:any)=>{
  return <YapilacakListeOgesi key={key} eris={burayaEris} eris2={surayaEris} anahtar={key} icerik={yapilacaklar[key]}></YapilacakListeOgesi>
})
}
            
       

        </Box>
      </Container>
    </>
  )
}
