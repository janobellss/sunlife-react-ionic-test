import React from 'react';
import { 
    IonToolbar, 
    // IonTitle, 
    IonButtons, 
    IonMenuButton, 
    IonButton, 
    IonIcon,
    IonHeader,
} from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';

const Header: React.FC = () => {
    return(
        <IonHeader className="ion-no-border" translucent>
            <IonToolbar color="sunlife-white" style={headerToolbarStyle}>
                <IonButtons slot="start">
                    <IonMenuButton auto-hide="false"></IonMenuButton>
                </IonButtons>
                
                <IonButtons slot="primary">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={notificationsOutline}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}

const headerToolbarStyle = {
    padding: '15px 10px'
}

export default Header;