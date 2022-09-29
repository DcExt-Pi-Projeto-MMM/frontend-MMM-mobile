import { IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, airplane, enter, personAdd } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='ion-text-center' color={"primary"}>Muda Meu Mundo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating" color={"primary"}>Usuário</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating" color={"primary"}>Senha</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonGrid>
        <IonItem>
          <IonButton fill="solid" color={"primary"} size="default">Cadastrar
            <IonIcon slot='start' icon={personAdd}></IonIcon>
          </IonButton>
          <IonButton size='default'> Login
            <IonIcon slot='end' icon={enter}></IonIcon>
          </IonButton>
        </IonItem>
      </IonGrid>
    </IonPage>
  );
};

export default Home;
