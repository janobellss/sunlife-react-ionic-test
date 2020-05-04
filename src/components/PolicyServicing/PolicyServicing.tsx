import React, { useRef } from 'react';
import { 
    IonPage,
    IonContent,
    IonItem, 
    IonLabel, 
    IonIcon, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonText, 
    IonButton 
} from '@ionic/react';
import { 
    walkOutline, 
    chevronUpOutline, 
    cashOutline, 
    cardOutline, 
    receiptOutline 
} from 'ionicons/icons';

import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';

const PolicyServicing: React.FC = () => {
    // const contentRef = useRef<HTMLDivElement>(null);
    
    // const scrollToTop = () => {
    //     contentRef.current.scrollToTop();
    // }

    return(
        // <React.Fragment>
        <IonPage>
            <Header />

            <IonContent color="sunlife-white" fullscreen>
                {/* <Header /> */}
                
                <Welcome />

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem color="sunlife-white" lines="none">
                                <IonIcon color="sunlife-yellow" icon={walkOutline} size="large" slot="start"></IonIcon>
                                <IonLabel>
                                    <IonText color="sunlife-tertiary-text"><p>Move value from one policy to another</p></IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow style={policyServicingRowStyle}>
                        <IonCol>
                            <IonItem className="policy-servicing-item" color="sunlife-white" lines="none" detail>
                                <IonLabel>
                                    <IonText color="sunlife-primary-text"><h2><b>Pay with Policy Value</b></h2></IonText>
                                </IonLabel>
                            </IonItem>

                            <IonItem className="policy-servicing-item" color="sunlife-white" lines="none" detail>
                                <IonLabel>
                                    <IonText color="sunlife-primary-text"><h2><b>Standing Instructions</b></h2></IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <div style={policyServicingLineStyle}></div>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem color="sunlife-white" lines="none">
                                <IonIcon color="sunlife-yellow" icon={cashOutline} size="large" slot="start"></IonIcon>
                                <IonLabel>
                                    <IonText color="sunlife-tertiary-text"><p>Cash out your policy values</p></IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow style={policyServicingRowStyle}>
                        <IonCol>
                            <IonItem className="policy-servicing-item" color="sunlife-white" lines="none" detail>
                                <IonLabel>
                                    <IonText color="sunlife-primary-text"><h2><b>Value Withdrawal</b></h2></IonText>
                                </IonLabel>
                            </IonItem>

                            <IonItem className="policy-servicing-item" color="sunlife-white" lines="none" detail>
                                <IonLabel>
                                    <IonText color="sunlife-primary-text"><h2><b>Payout Method</b></h2></IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <div style={policyServicingLineStyle}></div>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem color="sunlife-white" lines="none">
                                <IonIcon color="sunlife-yellow" icon={receiptOutline} size="large" slot="start"></IonIcon>
                                <IonLabel>
                                    <IonText color="sunlife-tertiary-text"><p>Take a loan against your policy value</p></IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow style={policyServicingRowStyle}>
                        <IonCol>
                            <IonItem className="policy-servicing-item" color="sunlife-white" lines="none" detail>
                                <IonLabel>
                                    <IonText color="sunlife-primary-text"><h2><b>Loans</b></h2></IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <div style={policyServicingLineStyle}></div>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem color="sunlife-white" lines="none">
                                <IonIcon color="sunlife-yellow" icon={cardOutline} size="large" slot="start"></IonIcon>
                                <IonLabel>
                                    <IonText color="sunlife-tertiary-text"><p>Payment options for your premiums</p></IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow style={policyServicingRowStyle}>
                        <IonCol>
                            <IonItem className="policy-servicing-item" color="sunlife-white" lines="none" detail>
                                <IonLabel>
                                    <IonText color="sunlife-primary-text"><h2><b>Premium Payment Method</b></h2></IonText>
                                </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonButton expand="full" fill="clear" onClick={(e) => {
                }}>
                    <IonIcon color="sunlife-primary-text" icon={chevronUpOutline} slot="icon-only" />
                </IonButton>

            </IonContent>
        </IonPage>
        // </React.Fragment>
    );
}

const policyServicingRowStyle = {
    padding: '0 10px 0 52px'
}

const policyServicingLineStyle = {
    border: '0.5px solid #BCBCBC',
    width: 'calc(100% - 65px',
    margin: 'auto'
}

export default PolicyServicing;