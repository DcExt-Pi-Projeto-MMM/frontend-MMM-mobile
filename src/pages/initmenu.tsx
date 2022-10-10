import { IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar, IonLabel, IonIcon, IonButton, useIonAlert, IonProgressBar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, airplane, enter, personAdd, chevronBackOutline, addOutline } from 'ionicons/icons';
import './initmenu.css';
import { useRef, useState } from 'react';

const InitMenu: React.FC = () => {

    const [usuario,setUsuario] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    function logarUsuario(){
        console.log(usuario,password)
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle class='ion-text-center' color={'light'}>Cadastro
                    </IonTitle>
                    <IonProgressBar type= "indeterminate" color={"light"}></IonProgressBar>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating' color={'primary'}>Novo usuário</IonLabel>
                                <IonInput value={usuario} onIonChange={(e:any) => setUsuario(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating" color={"primary"}>Nova senha</IonLabel>
                                <IonInput value={password} onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <IonGrid>
                <IonRow className='ion-align-items-center'>
                    <IonCol className='ion-text-center'>
                        <IonButton onClick={logarUsuario} size='default'>Cadastrar
                            <IonIcon slot='start' icon={addOutline}></IonIcon>
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

export default InitMenu;