import '../../assets/Semantic-UI-CSS-master/semantic.css'

export const CardDetails = (props) => {
    return (
    <div class="ui segment">

                            <div class="ui special cards">
                                <div class="card">
        
                                    <div class="content">
                                            <div class="ui grid">
                                                <div class="three column row">
                                                    <div class="column">
                                                        <i class="heart outline icon"></i><span id="cardHPId">10</span> 
                                                    </div>
                                                    <div class="column">
                                                            <h5>Happy Tree Family</h5>
                                                    </div>
                                                    <div class="column">
                                                        <span id="energyId">10</span> <i class="lightning icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div class="image imageCard">
            
                                        <div class="blurring dimmable image">
                                            <div class="ui inverted dimmer">
                                                <div class="content">
                                                    <div class="center">
                                                        <div class="ui primary button">Add Friend</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ui fluid image">
                                                <a class="ui left corner label">
                                                    DEADPOOL
                                                  </a>
                                                <img id="cardImgId" class="ui centered image" src="https://static.hitek.fr/img/actualite/2017/06/27/i_deadpool-2.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <div class="ui form tiny">
                                            <div class="field">
                                                <label id="cardNameId"></label>
                                                <textarea id="cardDescriptionId" class="overflowHiden" readonly="" rows="5">Le convoi d'Ajax est attaqué par Deadpool. Il commence par massacrer les gardes à l'intérieur d'une voiture, avant de s'en prendre au reste du convoi. Après une longue escarmouche, où il est contraint de n'utiliser que les douze balles qu'il lui reste, Deadpool capture Ajax (dont le véritable nom est Francis, ce que Deadpool ne cesse de lui rappeler). Après l'intervention de Colossus et Negasonic venus empêcher Deadpool de causer plus de dégâts et le rallier à la cause des X-Men, Ajax parvient à s'échapper en retirant le sabre de son épaule. Il apprend par la même occasion la véritable identité de Deadpool : Wade Wilson.
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="content">
                                        <i class="heart outline icon"></i><span id="cardHPId"> HP 10</span> 
                                        <div class="right floated ">
                                                <span id="cardEnergyId">Energy 10</span>
                                            <i class="lightning icon"></i>
                                             
                                        </div>
                                    </div>
                                    <div class="content">
                                        <span class="right floated">
                                                <span id="cardAttackId"> Attack 20</span> 
                                            <i class=" wizard icon"></i>
                                        </span>
                                        <i class="protect icon"></i>
                                        <span id="cardDefenceId">Defense 500</span> 
                                    </div>
                                    <div class="ui bottom attached button">
                                        <i class="money icon"></i>
                                        Actual Value <span id="cardPriceId"> 100$</span>
                                    </div>
        
                                </div>
                            </div>
            </div>
    )
}