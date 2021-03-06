import React from 'react';
import totalCases from './../api/totalCases'


class TotalStats extends React.Component {

    state = {
                total: 0,
                death: 0,
                recovered: 0,
                activeCases: 0,
                seriousCases: 0,
                newCases: 0,
                newDeath: 0,
                newRecoverd: 0
                
            };

    componentDidMount() {

        this.totalCasesRequest();
        
    }

    totalCasesRequest = async () => {

        const response = await totalCases.get();

        const result = response.data.results[0];
        this.setState({
            total: result.total_cases,
            death: result.total_deaths,
            recovered: result.total_recovered,
            activeCases: result.total_active_cases,
            seriousCases: result.total_serious_cases,
            newCases: result.total_new_cases_today,
            newDeath: result.total_new_deaths_today,
            newRecoverd: result.total_new_recovered_today
        });
    }

    render() {

        return (
            <div style={{ marginLeft:'10px', marginRight:'10px', marginTop: '40px', align: 'center' }} className="ui column center page grid">  
                <div style={{ marginBottom: '0'}}class="ui five item menu">
                    <div className="item">Total Cases</div>
                    <div className="item active">Total Deaths</div>
                    <div className="item">Total Recovered</div>
                    <div className="item">Active Cases</div>
                    <div className="item">Serious Cases</div>

                </div>  
                <div style={{marginTop: '0'}} className="ui five item menu">
                    <div class="item">
                            <div style={{color: 'gray'}} className="value">
                                <h3>{this.state.total} &nbsp; (+{this.state.newCases})</h3>
                            </div>               
                    </div>
                    <div class="item">
                            <div style={{color: 'red'}} className="value">
                                <h3>{this.state.death} &nbsp; (+{this.state.newDeath})</h3>
                            </div>                      
                    </div>
                    <div style={{color: 'lightgreen'}} className="item">
                            <div class="value">
                                <h3>{this.state.recovered}</h3>
                            </div>                                              
                    </div>
                    <div style={{color: 'darkyellow'}} className="item">
                            <div class="value">
                                <h3>{this.state.activeCases}</h3>
                            </div>                                              
                    </div>
                    <div style={{color: 'red'}} className="item">
                            <div class="value">
                                <h3>{this.state.seriousCases}</h3>
                            </div>                                              
                    </div>
                </div>
            </div>
        );
    }

}

export default TotalStats;
