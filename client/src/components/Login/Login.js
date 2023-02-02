.app-login_page__container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

}


form{
    display: flex;
    flex-direction: column;
    height: auto;
    width: 30vw;
    
}
@media only screen and (max-width: 600px) {

    form{
        width: 80vw;
    }
}
form input{
    margin: 1rem;
    padding: 1rem;
    border-radius: 9px;
    border: 2px solid #000000;
    outline: none;
    min-width: 12rem;
}
form label{
    margin:0 1rem;
}
form button{
    margin: 1rem;
    padding: 1rem;
    border-radius: 9px;
    border: 2px solid #000000;
    outline: none;
    cursor: pointer;
    background-color: #000000;
    color: #FFFFFF;
    width: 8rem;
    height: 2.75rem;
    
}
.app-landing_page__container__header-title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
}
.lin{
    margin-bottom: 1rem;
}
.app-landing_page__container__header-title h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 4.8125rem;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
}
