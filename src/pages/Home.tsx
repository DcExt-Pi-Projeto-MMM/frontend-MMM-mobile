import React from 'react';
import { IonList, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, IonProgressBar, IonCard, IonThumbnail, IonImg,} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, airplane, enter, personAdd } from 'ionicons/icons';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

type Item = {
  src: string;
};
const items: Item[] = [{ src: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFcQsBJetnHIw/company-logo_200_200/0/1587652941131?e=2147483647&v=beta&t=ZIa881vtR60mFylR3Z6_xtJQQqItwD1egCPz81epcOA' }];

=======
import axios from 'axios';
import Login from './Login';
>>>>>>> 0111d120e3fff76a9c814534c3074e127f16344b

const Home: React.FC = () => {

  const [usuario,setUsuario] = useState<string>('')
  const [password,setPassword] = useState<string>('')

  function logarUsuario(){
    return(
      axios.post('http://localhost:3000', {
          usuario: usuario,
          senha: password
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log('erro');
      })
  )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle class='ion-text-center' size={"large"} color={"dark"}>Muda Meu Mundo</IonTitle>
          <IonProgressBar type= "indeterminate" color={"dark"}></IonProgressBar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
      <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg id="logo" text-center src={image.src} />
          </IonThumbnail>
        </IonItem>
      ))}
      </IonList>
        <IonCard>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating" color={"primary"}>Usuário</IonLabel>
                <IonInput value={usuario} onIonChange={(e:any) => setUsuario(e.target.value)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating" color={"primary"}>Senha</IonLabel>
                <IonInput type='password' value={password} onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          </IonCard>
      </IonContent>
      <IonGrid> 
        <IonButton routerLink="/cadastro" fill="solid" color={"primary"} size="default">Cadastro
          <IonIcon slot='start' icon={personAdd}></IonIcon>
        </IonButton>
        <IonButton onClick={logarUsuario} fill='solid' size='default'color={"primary"}> Login
          <IonIcon slot='' icon={enter}></IonIcon>
        </IonButton>
      </IonGrid>

    </IonPage>
  );
};

export default Home;
