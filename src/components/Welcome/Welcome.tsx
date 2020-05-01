import React from 'react';
import { 
    // IonContent, 
    IonText, 
    IonAvatar, 
    IonButton, 
    IonIcon, 
    IonGrid, 
    IonRow, 
    IonCol 
} from '@ionic/react';

import { 
    cashOutline, 
    readerOutline, 
    documentTextOutline 
} from 'ionicons/icons/';

import userAvatarImg from '../../assets/Avatar_Female.png';

const Welcome: React.FC = () => {
    return(
        <React.Fragment>
            {/* <div className="welcome-background-content"></div> */}

            <IonGrid style={welcomeGridStyle}>
                <IonRow>
                    <IonCol>
                        <IonAvatar className="home-avatar">
                            <img src={userAvatarImg} alt={"user-avatar"}/>
                        </IonAvatar>
                        <IonText color="sunlife-primary-text"><h5 className="ion-text-center" style={welcomeGreetingStyle}>Good Afternoon</h5></IonText>
                        <IonText color="sunlife-primary-text"><h4 className="ion-text-center" style={welcomeNameStyle}>Chu Ying, Rebecca</h4></IonText>
                    </IonCol>
                </IonRow>

                <IonRow style={welcomeRowStyle}>
                    <IonCol className="ion-text-center" size="4">
                        <IonButton className="home-nav-btns" fill="clear" routerLink="/home" routerDirection="back">
                            <div className="flex-column-center">
                                <IonIcon color="sunlife-primary-text" icon={cashOutline} />
                                <IonText color="sunlife-primary-text">
                                    <p className='ion-text-wrap' style={welcomeParagraphStyle}><b>Manage</b></p>
                                    <p style={welcomeParagraphStyle}><b>ILAS Funds</b></p>
                                </IonText>
                            </div>
                        </IonButton>
                    </IonCol>

                    <IonCol className="ion-text-center" size="4">
                        <IonButton className="home-nav-btns" fill="clear" routerLink="/home" routerDirection="back">
                            <div className="flex-column-center">
                                <IonIcon color="sunlife-primary-text" icon={readerOutline} />
                                <IonText color="sunlife-primary-text">
                                    <p className='ion-text-wrap' style={welcomeParagraphStyle}><b>Claims</b></p>
                                </IonText>
                            </div>
                        </IonButton>
                    </IonCol>

                    <IonCol className="ion-text-center" size="4">
                        <IonButton className="home-nav-btns" fill="clear" routerLink="/policyServicing" routerDirection="forward">
                            <div className="flex-column-center">
                                <IonIcon color="sunlife-primary-text" icon={documentTextOutline} />
                                <IonText color="sunlife-primary-text">
                                    <p className='ion-text-wrap' style={welcomeParagraphStyle}><b>Policy</b></p>
                                    <p style={welcomeParagraphStyle}><b>Servicing</b></p>
                                </IonText>
                            </div>
                        </IonButton>
                    </IonCol>
                </IonRow>

                {/* <div style={welcomeCurveStyle}></div> */}

            </IonGrid>
        </React.Fragment>
    );
}

const welcomeGridStyle = {
    // padding: '0px 20px'
    padding: '0'
}

const welcomeRowStyle = {
    background: '#FFCC05',
    padding: '0 20px'
}

const welcomeGreetingStyle = {
    fontFamily: 'Satisfy',
    margin: '7px 0 0 0 '
}

const welcomeNameStyle = {
    fontWeight: 800,
    margin: '0 0 10px 0'
}

// const welcomeCurveStyle = {
//     width: '110%',
//     height: '100px',
//     background: '#EAAB00',
//     borderRadius: '0px 0px 50% 50%',
//     transform: 'translateX(-5%)'
// }

const welcomeParagraphStyle = {
    fontSize: '13px',
    margin: '5px 0',
}

export default Welcome;