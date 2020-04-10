import React, { Component, Suspense } from 'react'
import CardData from '../CardData/CardData';
import axios from 'axios';
import CardGlobalData from '../CardGlobalData/CardGlobalData';

export default class CompleteData extends Component {
    constructor(){
        super();
        this.state = {            
            data: false,
            persons: [],
            positif: 0,
            recovered: 0,
            positifGlobal: 0,
            recoveredGlobal: 0,
            death: 0,
            deathGlobal: 0,
            countries: [],
            selectedCity: "Indonesia",
            selectedCnData: []
        }
    }
    

    formatRupiah = (bilangan) => {
        var	reverse = bilangan.toString().split('').reverse().join('');
        var ribuan 	= reverse.match(/\d{1,3}/g);
            ribuan	= ribuan.join(',').split('').reverse().join('');

        return ribuan;
    }

    componentDidMount(){
        let initialCountry = [];    
        const dataCorona = `https://api.kawalcorona.com`;   
        const dataCoronaGlobal = `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu`;
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        axios.get(proxy + dataCorona + `/indonesia`)
            .then(res => {                
                const persons = res.data;
                this.setState({        
                    data: true,                                 
                    positif: persons[0].positif,
                    recovered : persons[0].sembuh,
                    death: persons[0].meninggal
                });                 
        })

        axios.get(proxy + dataCoronaGlobal + `/brief`)
            .then(res => {                
                this.setState({                     
                    positifGlobal : this.formatRupiah(res.data.confirmed),                                       
                    recoveredGlobal : this.formatRupiah(res.data.recovered),
                    deathGlobal : this.formatRupiah(res.data.deaths)
                });                                
        })          
        

        axios.get(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php`, {
            headers: {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		        "x-rapidapi-key": "a9fa1a2ca5msha3c9ad5e714899fp1e2a2ejsn8c732bfdd214"
            }
        })
        .then(res => {            
            initialCountry = res.data.countries_stat.map((cou) => {
                return cou
            });                
            this.setState({
                countries: initialCountry,
            });                   
        });                   
    }

    handleChange = (event) => {
        this.setState({
            selectedCity: event.target.value
        })                
    }
    componentDidUpdate(prevProps, prevState, snapshot){                        
    }
    
    
    render(){
        let optionItems = [...this.state.countries].sort((a, b) => a.country_name.localeCompare(b.country_name))
        .map((country) => {
                // if(country.country_name == this.state.selectedCity){
                //     return (
                //         <option selected key={country.country_name}>{country.country_name}</option>
                //     )
                // }
                if(country.country_name != '')
                    return (
                        <option key={country.country_name}>{country.country_name}</option>
                    )
                    
            }                            
        );
        let selectedCityData = this.state.countries.map((cn, id) => {
            if(cn.country_name == this.state.selectedCity){
                return (
                    <div className="row">
                        <div className="col-4">                              
                            <CardGlobalData color="warning" angka={cn.cases} nama='Kasus' />
                        </div>                  
                        <div className="col-4">                              
                            <CardGlobalData color="danger" angka={cn.deaths} nama='Meninggal' />
                        </div>                  
                        <div className="col-4">              
                            <CardGlobalData color="success" angka={cn.total_recovered} nama='Sembuh' />                                                                     
                        </div>                  
                    </div>                                       
                )
            }
        })
        return(
            <div className="container mt-5">
                <div class="card border-secondary mb-3" role="alert">
                    <div class="card-body text-dark">
                        <h3 class="card-title">Data Lengkap Kasus COVID-19</h3>
                        <br/>
                        {
                                this.state.data ? 
                                <div className="row">
                                    <div className="col-4">                              
                                        <CardData color="warning" nameCard="POSITIF COVID-19" lokal={ this.state.positif } global={ this.state.positifGlobal } />                                                                                            
                                    </div>                  
                                    <div className="col-4">                              
                                        <CardData color="success" nameCard="SEMBUH" lokal={ this.state.recovered } global={ this.state.recoveredGlobal } />                                                                                            
                                    </div>                  
                                    <div className="col-4">                              
                                        <CardData color="danger" nameCard="MENINGGAL" lokal={ this.state.death } global={ this.state.deathGlobal } />                                                                                            
                                    </div>                  
                                </div>                   
                                : <p>Please Wait...</p>
                        }
                    </div>
                </div>

                <div class="card border-secondary mb-3" role="alert">
                    <div class="card-body text-dark">
                        <h3 class="card-title">Kasus COVID-19 Per Negara</h3>
                        <br/>                        
                        <select defaultValue={this.state.selectedCity} value={this.state.selectedCity} onChange={e => this.handleChange(e)} >                            
                            {optionItems}
                        </select>                        
                        <br/> <br/>
                        {selectedCityData}
                    </div>
                </div>
            </div>
        )
    }

}