import { Web3Provider } from "@ethersproject/providers";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { getVolProtocolV1ContractInstance } from "../utils/contracts";
import Chart from "react-google-charts";

let dataArray = [
  ['x', 'ETH30VOl'],
  ["14-07-20" , 6.368368860810881],
["15-07-20" , 6.359177030274281],
["16-07-20" , 6.361282926567067],
["17-07-20" , 6.361393486307078],
["18-07-20" , 6.397698288443833],
["19-07-20" , 6.32044970335042],
["20-07-20" , 6.506580381040162],
["21-07-20" , 7.6544861890586695],
["22-07-20" , 9.680959001871708],
["23-07-20" , 11.616801948117073],
["24-07-20" , 16.855675446061262],
["25-07-20" , 21.10569199168859],
["26-07-20" , 24.867143844536823],
["27-07-20" , 27.402589813618583],
["28-07-20" , 29.44839392154293],
["29-07-20" , 32.060237420688985],
["30-07-20" , 35.29771322044801],
["31-07-20" , 41.07701818744497],
["01-08-20" , 44.34539780340525],
["02-08-20" , 48.36203421516987],
["03-08-20" , 51.704285494591026],
["04-08-20" , 55.364311599181136],
["05-08-20" , 57.93480759103692],
["06-08-20" , 59.326593520983714],
["07-08-20" , 60.97964290512379],
["08-08-20" , 61.92792155155338],
["09-08-20" , 62.655824806868935],
["10-08-20" , 62.38608858203434],
["11-08-20" , 61.90723620879214],
["12-08-20" , 62.74446097184548],
["13-08-20" , 63.72260883287748],
["14-08-20" , 63.446859446346686],
["15-08-20" , 62.60702711204701],
["16-08-20" , 61.07850895723332],
["17-08-20" , 58.77186701757764],
["18-08-20" , 54.808179141338165],
["19-08-20" , 51.02277427033342],
["20-08-20" , 46.95226263172051],
["21-08-20" , 43.09243668482549],
["22-08-20" , 38.54413033634449],
["23-08-20" , 36.18735203435208],
["24-08-20" , 33.63500028982504],
["25-08-20" , 31.308655614660346],
["26-08-20" , 28.179289843867306],
["27-08-20" , 24.240132743623803],
["28-08-20" , 20.984999508535463],
["29-08-20" , 19.090954589166635],
["30-08-20" , 19.852819407037668],
["31-08-20" , 23.2771839405416],
["01-09-20" , 24.118798750682704],
["02-09-20" , 24.276383817163218],
["03-09-20" , 24.5611733739524],
["04-09-20" , 27.83888547750918],
["05-09-20" , 29.00639849586856],
["06-09-20" , 30.6884326980122],
["07-09-20" , 33.13524208200071],
["08-09-20" , 34.51049785055264],
["09-09-20" , 35.003169227886076],
["10-09-20" , 35.38631299066145],
["11-09-20" , 35.2231099828492],
["12-09-20" , 34.862296651525604],
["13-09-20" , 34.40992855901647],
["14-09-20" , 33.92093558275667],
["15-09-20" , 33.18899233432093],
["16-09-20" , 32.495048146722205],
["17-09-20" , 32.25317343679369],
["18-09-20" , 31.698258247589088],
["19-09-20" , 31.76004817957129],
["20-09-20" , 32.311957800261375],
["21-09-20" , 32.88056024388718],
["22-09-20" , 34.01849037528469],
["23-09-20" , 34.307512231749264],
["24-09-20" , 34.49973918964058],
["25-09-20" , 34.64432040509331],
["26-09-20" , 34.54375838729845],
["27-09-20" , 34.3312482051704],
["28-09-20" , 32.84418650167201],
["29-09-20" , 30.45339506734331],
["30-09-20" , 22.263640470737172],
["01-10-20" , 16.082916136426576],
["02-10-20" , 15.441592647914995],
["03-10-20" , 14.580520473260693],
["04-10-20" , 13.907885648171373],
["05-10-20" , 14.196457192474707],
["06-10-20" , 14.30583473701768],
["07-10-20" , 13.547550555444884],
["08-10-20" , 13.475002671014757],
["09-10-20" , 13.736319852439262],
["10-10-20" , 14.003849705800855],
["11-10-20" , 14.518043531961247],
["12-10-20" , 15.098697219661968],
["13-10-20" , 15.457451293296918],
["14-10-20" , 15.83171453476938],
["15-10-20" , 15.842689177774966],
["16-10-20" , 15.241782820958338],
["17-10-20" , 15.235123605307347],
["18-10-20" , 15.025072916522625],
["19-10-20" , 15.021209154097726],
["20-10-20" , 15.893357679240461],
["21-10-20" , 18.334558567063933],
["22-10-20" , 18.397977216875166],
["23-10-20" , 19.900606944971432],
["24-10-20" , 20.881450895409007],
["25-10-20" , 21.11539262075276],
["26-10-20" , 21.711637594868932],
["27-10-20" , 21.55360328009465],
["28-10-20" , 21.459133347774564],
["29-10-20" , 21.31808521192521],
["30-10-20" , 20.928676388332782],
["31-10-20" , 20.33147324576262],
["01-11-20" , 19.529789287096442],
["02-11-20" , 18.90816810258109],
["03-11-20" , 18.56161056606195],
["04-11-20" , 17.69423547867592],
["05-11-20" , 20.0760023586398],
["06-11-20" , 20.58125845616775],
["07-11-20" , 22.914356396215176],
["08-11-20" , 24.136298862748603],
["09-11-20" , 25.611216371579623],
["10-11-20" , 28.00239225254004],
["11-11-20" , 29.736850606604968],
["12-11-20" , 31.970753360633346],
["13-11-20" , 32.90929322700851],
["14-11-20" , 32.48829586395401],
["15-11-20" , 32.48167324077898],
["16-11-20" , 33.809665708717475],
["17-11-20" , 34.609738970719555],
["18-11-20" , 34.10365694348736],
["19-11-20" , 36.49862512731624],
["20-11-20" , 42.294174782046596],
["21-11-20" , 47.537879553137024],
["22-11-20" , 55.94228315073261],
["23-11-20" , 62.37634429200603],
["24-11-20" , 64.8370102788586],
["25-11-20" , 64.84857788156137],
["26-11-20" , 63.980022447813646],
["27-11-20" , 63.355991388607094],
["28-11-20" , 63.64299707118888],
["29-11-20" , 65.84380521076085],
["30-11-20" , 65.8748026960632],
["01-12-20" , 65.24313990204061],
["02-12-20" , 65.09552110774314],
["03-12-20" , 62.835966402433726],
["04-12-20" , 61.70746903007826],
["05-12-20" , 62.15542644801627],
["06-12-20" , 60.98080292005882],
["07-12-20" , 59.48969278169097],
["08-12-20" , 57.50300536488531],
["09-12-20" , 55.29044151289068],
["10-12-20" , 53.37495954210026],
["11-12-20" , 51.3256407085148],
["12-12-20" , 50.110635403394305],
["13-12-20" , 47.67675149352942],
["14-12-20" , 43.688637993835115],
["15-12-20" , 41.88153716525672],
["16-12-20" , 41.249627457760646],
["17-12-20" , 40.189854130672],
["18-12-20" , 37.77093674552231],
["19-12-20" , 36.51637559446037],
["20-12-20" , 36.035642301276546],
["21-12-20" , 36.522598147514636],
["22-12-20" , 36.44112895346633],
["23-12-20" , 36.55756148628173],
["24-12-20" , 36.86355572474745],
["25-12-20" , 34.93541252665793],
["26-12-20" , 35.01188815388842],
["27-12-20" , 39.82724402078093],
["28-12-20" , 45.10316321705232],
["29-12-20" , 51.244195688024995],
["30-12-20" , 55.07114371561457],
["31-12-20" , 58.06126073990115],
["01-01-21" , 63.84914408333434],
["02-01-21" , 87.61206450246979],
["03-01-21" , 112.15092825108296],
["04-01-21" , 136.62463718058282],
["05-01-21" , 165.830982041499],
["06-01-21" , 188.35257009056798],
["07-01-21" , 206.38417543934116],
["08-01-21" , 225.10295457861503],
["09-01-21" , 238.03754798485423],
["10-01-21" , 240.16565382214057],
["11-01-21" , 240.34284452850838],
["12-01-21" , 242.3087470916267],
["13-01-21" , 247.03520524009303],
["14-01-21" , 249.38940468137557],
["15-01-21" , 253.09340608624942],
["16-01-21" , 255.51092486809466],
["17-01-21" , 257.77335602277753],
["18-01-21" , 263.25065874172685],
["19-01-21" , 264.7952385669406],
["20-01-21" , 257.2804018185073],
["21-01-21" , 247.96217551948243],
["22-01-21" , 238.10312171415643],
["23-01-21" , 232.70977044010291],
["24-01-21" , 222.01923738255763],
["25-01-21" , 213.19538514244132],
["26-01-21" , 201.4973673509827],
["27-01-21" , 189.9423199079929],
["28-01-21" , 178.44578305490666],
["29-01-21" , 161.9794960984662],
["30-01-21" , 137.66041000141726],
["31-01-21" , 113.15940568309836],
["01-02-21" , 112.81154464513806],
["02-02-21" , 127.51479141487071],
["03-02-21" , 135.988000225274],
["04-02-21" , 155.14714057319063],
["05-02-21" , 167.576251108978],
["06-02-21" , 174.2575598219207],
["07-02-21" , 188.6030055197396],
["08-02-21" , 202.07963515834427],
["09-02-21" , 205.82003018773682],
["10-02-21" , 206.71998358802628],
["11-02-21" , 212.93070248330375],
["12-02-21" , 218.87181763496326],
["13-02-21" , 220.5048337249403],
["14-02-21" , 221.58024525839627],
["15-02-21" , 221.224325814828],
["16-02-21" , 223.2936851592069],
["17-02-21" , 231.94945893740143],
["18-02-21" , 240.30259066007832],
["19-02-21" , 231.72844393521692],
["20-02-21" , 228.50702810487763],
["21-02-21" , 217.5525487042011],
["22-02-21" , 213.22225970471672],
["23-02-21" , 204.53767229800843],
["24-02-21" , 199.83621948542577],
["25-02-21" , 188.9124028989054],
["26-02-21" , 182.72420013091613],
["27-02-21" , 181.1368273513501],
["28-02-21" , 173.8082991828297],
["01-03-21" , 164.16433919297373],
["02-03-21" , 154.99222396208637],
["03-03-21" , 154.1688769620122],
["04-03-21" , 157.10682786629954],
["05-03-21" , 156.42401026889186],
["06-03-21" , 156.46659640530072],
["07-03-21" , 158.47485034191598],
["08-03-21" , 160.6655956406291],
["09-03-21" , 161.41694448992558],
["10-03-21" , 162.53356157922002],
["11-03-21" , 162.680616686873],
["12-03-21" , 166.86361204665855],
["13-03-21" , 167.28583098940078],
["14-03-21" , 166.8570475935892],
["15-03-21" , 166.7558625553101],
["16-03-21" , 167.46419300003788],
["17-03-21" , 167.39342622893597],
["18-03-21" , 166.56606576238138],
["19-03-21" , 162.66424559224444],
["20-03-21" , 156.68646299069388],
["21-03-21" , 151.88809632499226],
["22-03-21" , 145.60012601797175],
["23-03-21" , 145.86489266768615],
["24-03-21" , 145.32386761661238],
["25-03-21" , 144.9265587957539],
["26-03-21" , 140.02195773345022],
["27-03-21" , 132.02202039850437],
["28-03-21" , 125.66321889089932],
["29-03-21" , 114.85962694051771],
["30-03-21" , 115.52723731691854],
["31-03-21" , 113.2997803869644],
["01-04-21" , 126.56647173232169],
["02-04-21" , 125.82904672407952],
["03-04-21" , 125.53150125942278],
["04-04-21" , 132.62656250784428],
["05-04-21" , 141.13625567041154],
["06-04-21" , 142.89217940704214],
["07-04-21" , 149.06815455948325],
["08-04-21" , 153.8011128115946],
["09-04-21" , 161.58874079592434],
["10-04-21" , 168.11448395169225],
["11-04-21" , 174.83786587202164],
["12-04-21" , 189.84200565759758],
["13-04-21" , 210.29553287852318],
["14-04-21" , 233.82453457234817],
["15-04-21" , 247.91667207635982],
["16-04-21" , 253.0914231059536],
["17-04-21" , 255.0838055859515],
["18-04-21" , 254.21081741145636],
["19-04-21" , 256.9769520394767],
["20-04-21" , 255.56062436714512],
["21-04-21" , 253.13984166555105],
["22-04-21" , 241.1944905688158],
["23-04-21" , 222.52053134747126],
["24-04-21" , 210.3717755562899],
["25-04-21" , 206.2357139812267],
["26-04-21" , 204.23312930561968],
["27-04-21" , 213.26609120391188],
["28-04-21" , 220.78969568499764],
["29-04-21" , 228.43533703281312],
["30-04-21" , 248.7065472789637],
["01-05-21" , 269.4351112594936],
["02-05-21" , 324.43577191162944],
["03-05-21" , 352.1057278659151],
["04-05-21" , 396.72056135388766],
["05-05-21" , 429.96897121525336],
["06-05-21" , 448.8097322886938],
["07-05-21" , 496.4898242947498],
["08-05-21" , 534.6102267227361],
]
export default function Body() {
  const { chainId, library } = useWeb3React<Web3Provider>();

  const volProtocolV1Contract = getVolProtocolV1ContractInstance(
    library,
    chainId
  );

  let vol;
  if (library !== undefined) {
    try {
      (async () => {
        if (undefined !== typeof window["ethereum"]) {
          vol = await volProtocolV1Contract.getVol();
          vol = vol.toString();
          console.log('vol ==>', vol);
        }
      })();
    } catch (error) {
      console.error(error);
    }
  }

  return (<BodyWrapper>
    <Title>Current ETH Volatility</Title>
    <p>534.61</p>
    <Button>buy vETH</Button>
    <Button>sell vETH</Button>
    <Chart
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={dataArray}
            options={{
              hAxis: {
                title: 'Date',
              },
              vAxis: {
                title: 'ETH30VOl',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
  </BodyWrapper>);
}

const BodyWrapper = styled.section`
  margin: 0 auto;
  text-align: center;
  width: 95%;
`;

const Button = styled.div`
  background-color: white;
  padding: 8px;
  border: 1px solid blue;
  border-radius: 8px;
  display: inline-block;
  margin: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

const Title = styled.h3`
`;

