import "./styles/banner.css"
//import {StyledButton } from "../../../components/Button"

const Banner = ()=>{

//---Handle CV Downloading 
const DownloadCv = ()=>{
 
}

  return(
        <div  className="bannerWrapper">
           <div className="bannerTitle">
              <p className="hi_there muted">
                  Hi i'm,
              </p>
             <h2> 
               Md Shihab Uddin
             </h2> 
             <p 
              className="muted"
              style={{
                fontSize:"1em", fontWeight:"440"
             }}> 
               A Fullstack <sup>(MERN)</sup> Developer 
             </p>
             <p className="muted"> 
               I’m a professional MERN Stack Developer with 
                <br/> UI/UX Designing Skills based in lagos. 
             </p>
             <button 
              className="btn-downloadCv"
              Click={DownloadCv}
             > 
              <a href="https://drive.google.com/file/d/1i58l4JFOGfEBE_gaZqNIVveo6fT1QA3y/view?usp=drivesdk" target="_blank" rel="noreferrer">
                  Download My Resume
              </a>
             </button>
           </div>
           <div className="bannerImg">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABcVBMVEWPj8z/////xpU6LCRMPzjh9/nylVX/s38zMzGMjMv/yJeHh8mQkM7/ypjxklGFhcj/yZHm/f//zZqJj9HZ2e20tNz09Pr6tH43KBvg/P/m5vMzIwv7uISfn9P6+v3f3/DMzOe3t90tIh2oqNeUlM7u7vc1JRPAwOEhGBb3lUs8LiYbJSn2o2hZUmgxIADIyOWpm8FIOixNQ0+Eg7h5dqQyJiDotIiVc1gZJCj2pWuhmMRHOSo+OTYiCQCtrdlFOj5wbJSEZk7VpX2/lHBbRjengWLak3nFqbTYsqvqu6G8pLjyv5zgtqbm3tLvqHgtHRLq5uRnYoJVTV9JP0hpZIdxV0RZRTahfV/JnHZwZHi3lIQFAAAcEQC8kZ5ROCajhZHLko3DiWHprJGuka7llGnMoqbkqZUAGiNYTUL1r4exn77Pra/Nf0rt0Lqyt7PR5OWcpKOKjYu+zc1QQlV4eHTKxMC1rqmUioR0Z2AoEQCEenUxYo25AAASh0lEQVR4nM2d+UPbRhbHxwcmsmWb2sY4gM1lLnGFAObMgYGm5OJIaGi73e223Za0Tbfd3RDSv35nJMvWMSO9NzrI94e2IZXQx+/Ne/PeyDMkEb2q05XK+MTgw6l6vUkIadbrUw8HJ8YrlelqDL+dRHr34crsVJPkqBQmYkr/E/sxaU7NVoYjfYaoCBtjK1OkyMiItxhpkUytjDUiepIoCBuViabiz+bkbE5EQhk64fBsvYiCs2DmivWJ0F02XMKxQaTtOLZUJsZCfaYQCXW8AHQ9U5LBECHDIpyeJaHgdSFXwsok4RBW6iHimZBTlVCeLQTCxniY5rMykvEQgmtgwuoEfZKoRMNOYGcNSFgdLEZhvp6U4mBAxkCE1cFI3NPBmAvGGICwEQdfhzHAeJQnXImJz2BciZ2wQsKJL6ou//8vR2RzhxzhdD0svvUlrXb/MYixPh0f4WwoDkpt9/jRSC2Vqo08WgMgKrnZmAiHm6EYUCWPtZFUR8swMzYlKg884UQYfJTnTJtJ9TSyBCCkjHgzYgmnmyE4qKquLY1Y+ahm7hMIY66JHY1IwvHgUxhqPmP4OVR7BEJUcuMREjaCh1AWPWdmXHg6ogaJN9SMU6j8jyEcJsEMyBLfa575TMQUDFEhmICDIBwPZkDKt37uHH0OxBoMkWA8FU74MAggw1uqic3XZYQiPgydsFEP4KE0dp7t+eNhEJV6yITT8kNQj53LIDxGqIEiKhuMwLQBIxyWbREa3uk5+JyIe1DEHCzegAgrRVm8tTMN5p0WxEfQ++dA5QaEUA6QTazvY/F0xPswIxJShCACCKWyBDMfIHZyNQOboxJY1vAnlABko0/KfB3RSiM8RF/CcbyL0pkLMDeINLIOdlRfRD9CvAVpXYQKnlzVgAEVYEUfwgoWMBQ+FlChhL4R1ZtwDOmilA+c270Fjzak6L1Q5Uk4jLMgTQ+pEOxnaBk8FIl36vcirOImMur6oxH/JwerBv/NildT3IsQ1bBQyXmYfJjET5SmHCGqmlAf18IZgD2NvIYjelQaYsKHCECVLC2HzEc1A6ykGKK4XhQSYhKhuqaFbUAmhJ96pEURISKM0hAagQGZRsCzN4+AKiBsgO9MAZfCDTEWIeIpIYIOnIAQHmVU8ii0HOgmhOd9YbThE66AfZQCRjEETY3Agw0RrDFyCafBk7WIYkxXiPkpReR2briE4FSvroWeBR3CBBt+4ucRTsABoxuCpqC9Nx1xAkYIThRxAKZm4DMbfsrgEEJvR100ekBMMUzF8VM34SzQR1WixQGIM6LiXkF1EU6DffRVLCakwhjRHU9dhNBcr57FMAh14YzoyvtOQmhjRl2PaC7KE+QtBlOuto2TEHifuAahrhlETqTyJoRO19SluHyUaQ9D6Jy82QkbUMC1yMoJnjATG4rY8CAchIaZ+3HFUUMaZiQqg2LCKnDGHWuYYcKNxFxVSAhtzaiRVkw8aRhCe9PGSghN9urjWEchE3yphsmW9q2E4FEYY6boCNOUchjRQggfhbGbEFfsE1KscgmhZaG6Hmcu7Kh2hjLiBI+wAa57l+KOM0yoWGPNiT3CFXDVdAt8qdQyyk0tVVSPEGzC2xiGyAqDIroJwau96tltOGmqdo5z04qLENwDjnvGZgrTkrLWiSYhokV6O4DIfEGK0w5CaHcm7rKipxnUtKYXa0xC8JW3kg2ZcBmRdCvhzr/H4AsVr92EG5OTc7omJyc3JAGMexj/4N4Ds0rDlBuzEUKnpJx8Pzm3uv/moN2ial8eHG0ebgge0YtuLnWxedBOMrXaR/upOc4dXuEIzTKR4JKhM5RuzK0etUqlfDafZcpTlbKtA/qIYEr6gVwctPKlPLtFUr9JKX954WasIb1UsRLCnZTWhpZfOvllmz5Y0qEsfcTW0SEEcnJO22wnS6575EutfSfjMpKw46YE6aS2ZDF3lM878XqUrYMLT0jqm6ub7WyJf4tsqXU4ZydcwxF2pt8E66Sk28DY2GiXBHwmZPJS4K8srhxS/xZ+QjrjkQ0RmRBNN9UJUW93dQm1lsfj9SDbbw5ZjNzofCo03NJ4ebh52XL7plOltvXTQRMaK1EEle6tCX/SH1AXCxytg82Lw1VN0w43N48OLlvZEmf48q5trfYQcZ0MYiZ9gpqTWgjnLmGAulh8LNFImWQhEwbXuTD55YY8Yd0kbKDesTS8dHLTcwyGJgsictpGVWx0CCuo97sMG24k4YYIiKhJEyqVDiF43V5H1H/h3AHCR4Mp35qT9FIjXzDCJuYqY06zGhsgRbyckyTUF70JogVlELJ56WR8JqQqbU5KZQtqxIZOiJiykU5tMRfXKDSU16ONBCGbuBF4k61DuD6S2tiPJ5CayupDUcaGKzrhFI5wbSY1147TSalKb6ifLqMaNQbhlE6I/OKdSj/OeJ2UGjFLI/gMGlCfmhJkvmfBNG4nTRrxFFkB66I5nyADDSX86iTWSGqodIjtYuiik2+SGMfMaMpUX3/TitlJk8yIf8M1vQ0p45QQPqNRy81vP89kkt/Eb0I6FP/+j50y+ru6dFZD4IVFmXw3P18oZPL7t0L4z5dD3++UsYR1Sgids5V/yMxnMpnCYv4yfielhP1UQ1+Uka7aTBDonK38A+OjhNvZ2wA0CPuHvkd+bV5pkCoslJqAmcLQrQB2CPv73+Lyfq5KYD0adaeQ6RCO3hLhaAfxe9RYzA0T2Lph+cdPhnDoXxjEXIWACvzytx0fpYS3wmch7O/fQQxFpUJAlUU5k/mECH9CGFEZJ5BOYjfMMN2Ok1oJhxBGVGYJpKFf/rzwKRH2fwE3ojJIAG/rqSST+aQI+xE2fEgA9a96z+Kki58A4dA9MKIyBSG0RFIfwiyuo22X97U2G8ITBiWs+/9f5e8KMMJ88uDNm4Ok1MQ8n72k17ZKotvbCBHRtA4i/BxGmH+ztUC19UYCsXRwh13884WoQWIjfIshBJQWQML8xcIdXVsX6C5H6WjLuHZhT4BoI+yHE4JKJxhh3nxIiniEtGK2/bN57YLg45ElBDHaCMXZYuFOTzjAZOmqd+lWm/sb5G0IIfwOQJi/XLA+JcqI2Zbl2gX+MJYfh5BIY80WQsIj61Pi3DTb3upde4fvpjZCRAVVR2f8jOAp7YS4fmO2ZSXkd2OzVieFZwtYxifWWZuotrDZYQvbb7QACuxvI3yCmdNAvkViDTUFUcLK7/Wecg8ZS0v7vp+OlRBRXNB5KaS2UC3Vk7DGz1/2sgXmLQb98XtuuiV6QUAu0NDaAtQQLmcKvoS9rL11hM74+XZ3tiD6cKSmpaw+hNX4li6GuNdWal/RmdfWlferUgLE1sXW1sLW3oHwWgshmE+v8WHLFpZO1LbHxDTfardbgje5sl3x/zqfFF9rL/ExrSilAuy1qTumEQs+5ZMIIDnalWjmmYUVT4hRqPfagO+0WVo1MvVfdrtg0aLEDYa6hKgNunLD0J43Qyx4JkQfQEtK9fED/h26gPD6XiesgtctSPmevjIj0xLODtkA6T360ffojMG3mGYp0dct4O8LGatrMgsX2cWMQwUpwiGaJ5BLiE3M+qG+QvpjZl6iF1VwEWIdgQaatz89VaTWDzFvtall+it2BpB82VE3IdIRBn5RiIJfAjbWgDHr+DqlggQMhVDySAZ9HR/7LgYpH2MRg3vpM6x7dpQbk3ifhpSfoN3UHWlwNxhA9PFt0t+nwb4TRZTgAxGbLdgwlJIi8V4bVVkiXdgzPnpeJMdnvteGezeREX6BNaJr1oYkPJZ00s67iehQo9xDE7KZ95Ap9Ht/A0/kAw0jhM5Me8K7adK3evIkRL2nbSWsSrznrRP+ijdiEMk6qfmeN+5dfSalGSvhwFPZSDoh8X0LQxJJP4jk+Czft0DnfKL8AjaieNhBB6R0uu99Zwa367Ou8jMgX1LUs/D6KwchsiTsqve9J8x318yLn4KMmE1mCgX+OgCdBBRgs1PpOGP57hpyd3kmmBH1uQy3O2eU/ZBCWHrGZv3+IXpqCjaiMVnjES5CSwzZssL2HVJ8vgAaMSsulaBFlLwJbd8DRk/cgBVGx1JuN+30pgBeKj0K7d/lhm8a0RNk/m2COE2V7ZjQo3/ekXQgJea2Eeg9FXpSIIGwUzXZ8wILsTAnlc+Fzj0VJNwUVGJ0W8Gjvfye7QICunayfK59MWTcFDYBN4ve7dFuaWFSCxdbuxp4Km1C594mEkmfIR77InYbGDTzbw+Njg5ts/8C9tsGnssDuvanwReJuvxThqWjbxT43T/5h5lsgBMJu9tDdveJQndrmJSmL6F70QIMGCSOsg6NgxB9spNxox0A4mjG3S8FtIQDDULOXl9SsYatSAECKo0t9l5bYdu/rBj4NQAgb782fMsNjkhxhhZ7rbZMP6BsCpAJidFkcxHivrRuQQQ4qp4ER/u3txe3+0eTkGZUkDBKBPsmyky/dSnNZ7BiEdFqCwjI3/sSvH+p+37l5yF3poKNQeH+pVKTU0P4xRpvwCBRlIj3oJXN+jpi0396A9e9YIDifYRRx3Q5pJSfJsNhHDgOekC9eC9o+ZHIVCb4BRuenkgsZttVFO/nHWAk6ow7gV114HkzoId678kO3ldfdO/yzvMB6e/MUL5n9wIb0GdffcRRVhypVOW1r5OCPeZ8lC89e1rGflWbB+h5NoLs7NTAI2uvz9O7e3v7vK0GvZXNl9r7e6+WHq+xjykYppPI8WepEoM90/rZ/dXd1bSuvTR3M0QPvNbR1R67cnU3TSlJAErfM0rwaxgOurQJuX+ZBEzSssYGi3t7vUsp5fnrdSLH6H/ODPysIBNwPb27aqczGQuZRWOezec0fj66eXVnz3Xx6u7uK/yGOwR0VhC2Y6Ou73LwmL40+hYZWk8MjVoWuc0J+OjQ9mKm8NsdweVpCT6SA5z3hF/05hlQl6M/s8hQqVgRtdj5aSbzm9uAhnD7d3cEOrMLfc6xCDDtbl30iuCuRISr2I2RmYDnriELRfUcSsiVkBC//xz47DzsUcdnIjcNRLgrsXcZ+PxDxAbtxCvUBCPEmxBxhiVu8rYWCSHq2BUDEHEOKS7vC0PNPLcVbFNhXkC4+hV6o0vUWbKY84DFoebFs4InZGF+fvvd7xqfEHfWGhOfJJQznQWhRuu72/furb55FoeO4R2f3v1MQIgONEXkmc6Yc7nVdRFhX9/du30vjl9m5hlnV/RPmZfHL9hf9okIV3F8EudyI5o2qiDUMMI+g/L0xbvj1suX24vbL98+O373Qv+hLhEhdhN9ibPVEadZrvFtWOuz6K5Vlp+LCNO4g3MEUcaHEJj4VSJ4RhuhSCJCTUMg8lM9gLAKIWTnVgsI/x2EsIZAVKoeFF6EiWH/uQ21YC3Ff0gY4R/8i1OpVA2KyJtvAwkTFT9EHTAiwpTWBCEWnX0LDKFf20ZtruqHQURDWEtDynxXYwZH6JcWO0c9hk5o7MNeS/tX4+JECCRMjIsdVe0e68w3Q2BCduyhjxV9Af0JPayonpvHBnGfMgTC1IzP1rr+gABC4VhUv+qeixQ6Ye9QC89mht8YBBIKIqr6und4F/8p/wMh/NObMLXsUWT4RFE4Ife9PvuJudERehx8aL6bFwJhYlhxTm/Y1uw+hJo8oe0o1xo/LSoKt2khSZioOuaoqpqu+RN+Fg7hIx6h0vSaquEJnZWGem4/m4z7mDBCHydlAZXT0fCqJiQJEw8tg9F15nGkhKllV+80J64H5QktiVFdc53LHSmh6+AHQBqUIUwMd3aapoPQ+QjyhP/jXem8u30oKsSzmAhAmGjUdTNaUn1MhLahmKs3/B9VkjCRWCkq/LPjOQMxTMLeMTpKEeGhEoSJ6WauyTt4nEf4uywh5/6ptJEVlSYsC8oTJhIT/+UeJhs1oeGnuQn08+IJE+9rJ9ES8g+np/E018SEGHnCROLDg1sgTGmcJeyoCBOn6Y+u3x814cfVU6lnlSNMJK5PTsIhvIENw5OTa8knlSVMND482IiNsPbgAyoHhkJIXfXGxugm/CMkwo0HN3IOGpTQwRgaoRYmX0BCmjl6jNEQBuULTKjb8YQ/EGGEV15OehKYLwRCyvhBZwyf8OTBh8B8oRBSXV9RyHAJTx6kZfODXeEQUkP+9dGJKEnIhmHt40kY5tMVFiHV9U3N5qnan3KEtY8fb96H91ghElJDXt9oGpLQBXhy8146u/MUKiFV4/2Hq44p8YRaLf1XuHiJ8AmZTq//Sqc0DUWoMbrrsMaeVVEQMp1SW4IINQan3Xx4HwUdU1SEhhoNX8Srv64jg9MVLWFHjUbj1IV2Sn8axy//PxeD9Ejf/inEAAAAAElFTkSuQmCC" alt="Profile..."/> 
            {/*
              <img src="./images/cat_img.jpg" alt="CEO"/>
            */}
           </div> 
        </div>
    )
}

export default Banner
