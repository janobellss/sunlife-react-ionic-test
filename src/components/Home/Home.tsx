import React from 'react';
import { 
    IonContent,
    IonButton, 
    IonIcon, 
    IonText,
    // IonAvatar,
    IonThumbnail,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
} from '@ionic/react';
import { 
    chevronForwardOutline 
} from 'ionicons/icons';

import lifeImg from '../../assets/Life.png';
import critImg from '../../assets/Critical_Illness.png';
import medImg from '../../assets/Medical_And_Hospital.png';
import accImg from '../../assets/Accident.png';

import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';

const Home: React.FC<any> = ({ history }) => {
    return(
        <React.Fragment>
            {/* <Header /> */}
            
            <IonContent color="sunlife-white" fullscreen>
                <Header />
                
                <Welcome />
            
                <IonButton fill="clear" expand="full" routerLink="/policies" routerDirection="forward">
                    <IonIcon color="sunlife-primary-text" icon={chevronForwardOutline} slot="end"></IonIcon>
                    <IonText color="sunlife-primary-text"><h3 className="ion-no-margin">Coverage from 4 Policies</h3></IonText>
                </IonButton>

                <IonGrid style={homeGridStyle}>
                    <IonRow style={homeRowStyle}>
                        <IonCol>
                            <div className="flex-column-center">
                                <IonThumbnail>
                                    <img src={lifeImg} alt={"life-icon"}/>
                                </IonThumbnail>
                                <IonText color="sunlife-primary-text"><h5 className="ion-no-margin" style={homeCoverageTitleStyle}>Life</h5></IonText>
                                <IonText><p className="ion-no-margin" style={homeCoverageStyle}>HKD 6,146,066</p></IonText>
                            </div>
                        </IonCol>

                        <IonCol>
                            <div className="flex-column-center">
                                <IonThumbnail>
                                    <img src={critImg} alt={"critical-illness-icon"}/>
                                </IonThumbnail>
                                <IonText color="sunlife-primary-text"><h5 className="ion-no-margin" style={homeCoverageTitleStyle}>Critical Illness</h5></IonText>
                                <IonText><p className="ion-no-margin" style={homeCoverageStyle}>up to HKD 1,000,000</p></IonText>
                            </div>
                        </IonCol>
                    </IonRow>

                    <IonRow style={homeRowStyle}>
                        <IonCol>
                            <div className="flex-column-center">
                                <IonThumbnail>
                                    <img src={medImg} alt={"medical-hospital-icon"}/>
                                </IonThumbnail>
                                <IonText color="sunlife-primary-text"><h5 className="ion-no-margin" style={homeCoverageTitleStyle}>Medical & Hosp.</h5></IonText>
                                <IonText><p className="ion-no-margin ion-text-center" style={homeCoverageStyle}>up to: HKD 721,800/year, HKD 600,000/disability</p></IonText>
                            </div>
                        </IonCol>

                        <IonCol>
                            <div className="flex-column-center">
                                <IonThumbnail>
                                    <img src={accImg} alt={"accident-icon"}/>
                                </IonThumbnail>
                                <IonText color="sunlife-primary-text"><h5 className="ion-no-margin" style={homeCoverageTitleStyle}>Accident</h5></IonText>
                                <IonText><p className="ion-no-margin" style={homeCoverageStyle}>up to HKD 1,000,000</p></IonText>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonText color="sunlife-tertiary-text">
                    <p className="ion-text-center" style={homeLegalStyle}>*Additional coverages detailed in provision</p>
                </IonText>

                <IonCard color="sunlife-white" style={homeCardStyle}>
                    <IonCardContent style={homeCardContentStyle}>
                        <IonItem color="sunlife-white" lines="none">
                            <IonLabel>
                                <IonGrid className="ion-no-padding">
                                    <IonRow className="ion-align-items-center">
                                        <IonCol>
                                            <IonText>
                                                <h1>Assets</h1>
                                            </IonText>
                                        </IonCol>

                                        <IonCol className="ion-text-end">
                                            <IonText>
                                                <p>Total</p>
                                            </IonText>
                                        </IonCol>

                                        <IonCol className="ion-text-end">
                                            <IonText>
                                                <p><b>HKD 255,309</b></p>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonLabel>
                        </IonItem>

                        <div style={policyServicingLineStyle}></div>

                        <IonItem className="policy-servicing-item" color="sunlife-white" lines="none" detail>
                            <IonLabel>
                                <IonGrid className="ion-no-padding">
                                    <IonRow>
                                        <IonCol>
                                            <IonText>
                                                <p>Investment-Linked</p>
                                            </IonText>
                                        </IonCol>

                                        <IonCol className="ion-text-end">
                                            <IonText>
                                                <p><b>HKD 10,539</b></p>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonLabel>
                        </IonItem>

                        <IonItem className="policy-servicing-item" color="sunlife-white" lines="none" detail>
                            <IonLabel>
                                <IonGrid className="ion-no-padding">
                                    <IonRow>
                                        <IonCol>
                                            <IonText>
                                                <p>Savings</p>
                                            </IonText>
                                        </IonCol>

                                        <IonCol className="ion-text-end">
                                            <IonText>
                                                <p><b>HKD 161,688</b></p>
                                            </IonText>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonLabel>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </React.Fragment>
    );
}

const homeGridStyle = {
    padding: '5px 15px 5px 15px'
}

const homeRowStyle = {
    paddingBottom: '10px'
}

const homeLegalStyle = {
    fontSize: '10px'
}

const homeCoverageTitleStyle = {
    margin: '10px 0 2px 0'
}

const homeCoverageStyle = {
    fontSize: '14px'
}

const policyServicingLineStyle = {
    border: '0.5px solid #BCBCBC',
    width: 'calc(100% - 22px',
    margin: 'auto'
}

const homeCardStyle = {
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '0',
    borderRadius: '30px 30px 0 0'
}

const homeCardContentStyle = {
    padding: '5px 5px 20px 5px'
}

export default Home;