import { Tooltip } from 'react-tooltip';
export function BadgesCard() {

  return (
    <div className="absolute top-[130px] right-[20px] justify-end select-none">
          <Tooltip id="tooltip" style={{ backgroundColor: "rgb(0, 0, 0)", color: "#fff" }} place="left"/>
          <img
            data-tooltip-id="tooltip" 
            data-tooltip-content="Hypesquad Balance"
            src="/assets/discord-hypesquad-balance.svg"
            alt="discord-hypesquad-balance"
            width="22"
            height="22"
            className="inline-block"
            draggable="false"
          />
          <img
            data-tooltip-id="tooltip" 
            data-tooltip-content="Active Developer"
            src="/assets/discord-active-developer.svg"
            alt="discord-active-developer"
            width="22"
            height="22"
            className="inline-block"
            draggable="false"
          />          
          {/*<img
            src="/assets/discord-nitro.svg"
            alt="discord-nitro"
            width="22"
            height="22"
            className="inline-block"
            draggable="false"
          />
          <img
            src="/assets/discord-booster.svg"
            alt="discord-booster"
            width="22"
            height="22"
            className="inline-block"
            draggable="false"
          />
          <img
            data-tooltip-id="tooltip" 
            data-tooltip-content="Originally known as selim#0697"
            src="/assets/originally-name.png"
            alt="discord-booster"
            width="22"
            height="22"
            className="inline-block"
            draggable="false"
          />
          */}
          
        </div>
  );
}
