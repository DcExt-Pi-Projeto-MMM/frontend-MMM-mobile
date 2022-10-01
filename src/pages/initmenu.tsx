import { IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, useIonAlert } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, airplane, enter, personAdd, chevronBackOutline } from 'ionicons/icons';
import './initmenu.css';
import { useRef } from 'react';

const initmenu: React.FC = () => {

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle class='ion-text-center' color={'light'}>Cadastro
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating' color={'primary'}>Novo usuário</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating" color={"primary"}>Nova senha</IonLabel>
                                <IonInput></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonGrid>
                <IonRow className='ion-align-items-center'>
                    <IonCol className='ion-text-center'>
                        <IonButton routerLink='/cadastrar' size='default'>Cadastrar
                            <IonIcon slot='start' icon={personAdd}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow className='ion-align-items-center'>
                    <IonCol className='ion-text-center'>
                        <IonButton routerLink='/voltarCadastrar' size='default'>Voltar
                            <IonIcon slot='start' icon={chevronBackOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonPage>
    )
}

export default initmenu;