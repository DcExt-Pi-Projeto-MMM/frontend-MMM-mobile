import { IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, IonProgressBar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, airplane, enter, personAdd } from 'ionicons/icons';
import './Home.css';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {

  const [usuario,setUsuario] = useState<string>('')
  const [password,setPassword] = useState<string>('')

  function logarUsuario(){
    console.log(usuario,password)
  }

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle class='ion-text-center' color={"light"}>Muda Meu Mundo</IonTitle>
          <IonProgressBar type= "indeterminate" color={"light"}></IonProgressBar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonGrid>
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
                <IonInput value={password} onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
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
