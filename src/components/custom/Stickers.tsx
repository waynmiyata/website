import Image from "next/image";
import Sticker from "/public/images/sticker.gif";

function Stickers() {
  return (
    <section className="mx-6 mt-10 font-sans border-2 border-brand-red">
      <div className="bg-brand-yellow pb-12">
        <h3 className="text-2xl font-light bg-brand-red py-2 px-4 text-white">
          Wayne Miyata Surfoard stickers
        </h3>
        <Image
          src={Sticker}
          alt="Wayne Miyata Surfoard sticker"
          className="float-right w-32 md:w-48 mx-8 md:mb-8 md:mt-2 rounded"
        />

        <p className="pt-6 p-4 text-lg font-light leading-snug">
          Stick them on anything. Wayne Miyata Surfoard stickers.
          <br />
          <span className="text-sm">(2&#34; in diameter)</span>
        </p>
        <p className="p-4 pt-0 text-lg font-light leading-snug">$2 /each</p>
        <div className="p-4 pt-0">
          <form
            target="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <input
              type="image"
              src="https://www.paypal.com/en_US/i/btn/x-click-but22.gif"
              name="submit"
              alt="purchase sticker"
            />
            <img
              alt="pixel"
              src="https://www.paypal.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
            <input type="hidden" name="add" value="1" />
            <input type="hidden" name="cmd" value="_cart" />
            <input type="hidden" name="business" value="tava@waynemiyata.com" />
            <input
              type="hidden"
              name="item_name"
              value="Wayne Miyata Surfboard Sticker"
            />
            <input type="hidden" name="amount" value="2.00" />
            <input type="hidden" name="page_style" value="Primary" />
            <input type="hidden" name="no_shipping" value="2" />
            <input
              type="hidden"
              name="return"
              value="http://www.waynemiyata.com"
            />
            <input
              type="hidden"
              name="cancel_return"
              value="http://www.waynemiyata.com"
            />
            <input type="hidden" name="no_note" value="1" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="hidden" name="lc" value="US" />
            <input type="hidden" name="bn" value="PP-ShopCartBF" />
          </form>
        </div>
      </div>
    </section>
  );
}
export default Stickers;
