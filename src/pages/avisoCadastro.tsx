import { IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, airplane, enter, personAdd } from 'ionicons/icons';
import './avisoCadastro.css';

const avisoCadastro: React.FC = () => {
    return(
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar color={'primary'}>
                        <IonTitle class='ion-text-center' color={'light'}>
                            Muda Meu Mundo
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
            </IonContent>
        </IonPage>
    )
}
export default avisoCadastro;