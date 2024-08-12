import Image from "next/image";
import TShirt from "/public/images/t-shirt.gif";

function TShirts() {
  return (
    <section className="mx-6 mt-10 font-sans border-2 border-brand-red">
      <div className="bg-brand-yellow pb-12">
        <h3 className="text-2xl font-light bg-brand-red py-2 px-4 text-white">
          T-shirts
        </h3>
        <Image
          src={TShirt}
          alt="Wayne Miyata T-shirt"
          className="float-right w-32 md:w-48 mx-8 md:mb-8 md:mt-6 rounded"
        />
        <p className="pt-6 p-4 text-lg font-light leading-snug">
          Cotton T-shirt with Wayne Miyata Surfboard logo.
          <br />
          Your choice of red, yellow, white or black.
        </p>
        <p className="p-4 pt-0 text-lg font-light leading-snug">$20 /each</p>
        <div className="p-4 pt-0">
          <form
            target="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <table>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="size" />
                  size
                </td>
                <td>
                  <select name="os0">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    {/* <option value="XL">XL</option> */}
                  </select>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <input type="hidden" name="on1" value="color" />
                  color
                </td>
                <td>
                  <select name="os1">
                    <option value="black">black</option>
                    <option value="white">white</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                  </select>
                </td>
                <td className="pl-10">
                  <input
                    type="image"
                    src="https://www.paypal.com/en_US/i/btn/x-click-but22.gif"
                    name="submit"
                    alt="purchase t-shirts"
                  />
                </td>
              </tr>
            </table>
            <img
              alt=""
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
              value="Wayne Miyata Surfboard T-shirt"
            />
            <input type="hidden" name="amount" value="20.00" />
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
export default TShirts;
