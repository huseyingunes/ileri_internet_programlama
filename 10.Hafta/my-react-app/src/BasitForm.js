function BasitForm(props)
{
    return(
        <form>
           Adınız <input type="text" name="ad" />
           <br />
           Soyadınız <input type="text" name="soyad" />
           <hr />
           <input type="submit" value="Gönder" />
        </form>
    )
}

  export default BasitForm;