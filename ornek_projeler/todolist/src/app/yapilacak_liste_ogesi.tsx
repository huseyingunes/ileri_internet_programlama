'use client'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));






export default function YapilacakListeOgesi(props:any) {


    function guncelleTiklandi(id:any)
    {
        let yeni = prompt("Yeni Yapılacağı Giriniz: ", "");
        props.eris2(id, yeni)
    }

    function silTiklandi(id:any)
    {
        props.eris(id)
    }
    

    return(
        <Item>
        <Grid item xs={12} md={12}>{props.icerik}</Grid>
        <Chip
  label="Düzenle"
  onClick={()=>{guncelleTiklandi(props.anahtar)}}
  variant="outlined"
/>
        <Chip
  label="Sil"
  onClick={()=>silTiklandi(props.anahtar)}
  variant="outlined"
/>
        </Item>

    )
}