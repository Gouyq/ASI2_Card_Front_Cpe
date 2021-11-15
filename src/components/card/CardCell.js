
export const CardTab = (props) => {
    return (
    <tr>
        <td>
            <img  class="ui avatar image" src="https://vignette.wikia.nocookie.net/lego/images/4/48/76096_Minifigure_04.jpg/revision/latest/scale-to-width-down/250?cb=20190729133554"/> <span>Superman </span>
        </td>
        <td>"The origin story of Superman relates that he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction. Discovered and adopted by a farm couple from Kansas, the child is raised as Clark Kent and imbued with a strong moral compass. Early in his childhood, he displays various superhuman abilities, which, upon reaching maturity, he resolves to use for the benefit of humanity through a 'Superman' identity."</td>
        <td>DC Comic</td>
        <td>50</td>
        <td>100</td>
        <td>80</td>
        <td>100</td>
        <td>100$</td>
        <td>
            <div class="ui vertical animated button" tabindex="0">
                <div class="hidden content">Sell</div>
                <div class="visible content">
                    <i class="shop icon"></i>
                </div>
            </div>
        </td>
    </tr>)
}