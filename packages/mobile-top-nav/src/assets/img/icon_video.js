import { html, LitElement } from 'lit-element';
import Icon from './icon';

class IconVideo extends Icon {
  render() {
    return html`
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Mockups-&amp;-Interactions-(Revised)"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Topnav---mobile---hamburger-open-Copy-2"
            transform="translate(-10.000000, -138.000000)"
            fill="${this.fill}"
          >
            <g id="Media-menu-layer" transform="translate(0.000000, 40.000000)">
              <g id="Media-menu-options" transform="translate(10.000000, 10.000000)">
                <g id="Group-3" transform="translate(0.000000, 88.000000)">
                  <g id="Group-12">
                    <g id="Shape-4">
                      <path
                        d="M22.9570963,4.06779661 C22.9570963,4.47457627 22.6754141,4.74576271 22.2528909,4.74576271 L20.9853211,4.74576271 C20.5627979,4.74576271 20.2811157,4.47457627 20.2811157,4.06779661 L20.2811157,3.38983051 C20.2811157,2.98305085 20.5627979,2.71186441 20.9853211,2.71186441 L22.2528909,2.71186441 C22.6754141,2.71186441 22.9570963,2.98305085 22.9570963,3.38983051 L22.9570963,4.06779661 L22.9570963,4.06779661 Z M22.9570963,7.3220339 C22.9570963,7.72881356 22.6754141,8 22.2528909,8 L20.9853211,8 C20.5627979,8 20.2811157,7.72881356 20.2811157,7.3220339 L20.2811157,6.6440678 C20.2811157,6.23728814 20.5627979,5.96610169 20.9853211,5.96610169 L22.2528909,5.96610169 C22.6754141,5.96610169 22.9570963,6.23728814 22.9570963,6.6440678 L22.9570963,7.3220339 L22.9570963,7.3220339 Z M22.9570963,10.5762712 C22.9570963,10.9830508 22.6754141,11.2542373 22.2528909,11.2542373 L20.9853211,11.2542373 C20.5627979,11.2542373 20.2811157,10.9830508 20.2811157,10.5762712 L20.2811157,9.89830508 C20.2811157,9.49152542 20.5627979,9.22033898 20.9853211,9.22033898 L22.2528909,9.22033898 C22.6754141,9.22033898 22.9570963,9.49152542 22.9570963,9.89830508 L22.9570963,10.5762712 L22.9570963,10.5762712 Z M22.9570963,13.9661017 C22.9570963,14.3728814 22.6754141,14.6440678 22.2528909,14.6440678 L20.9853211,14.6440678 C20.5627979,14.6440678 20.2811157,14.3728814 20.2811157,13.9661017 L20.2811157,13.2881356 C20.2811157,12.8813559 20.5627979,12.6101695 20.9853211,12.6101695 L22.2528909,12.6101695 C22.6754141,12.6101695 22.9570963,12.8813559 22.9570963,13.2881356 L22.9570963,13.9661017 L22.9570963,13.9661017 Z M22.9570963,17.220339 C22.9570963,17.6271186 22.6754141,17.8983051 22.2528909,17.8983051 L20.9853211,17.8983051 C20.5627979,17.8983051 20.2811157,17.6271186 20.2811157,17.220339 L20.2811157,16.5423729 C20.2811157,16.1355932 20.5627979,15.8644068 20.9853211,15.8644068 L22.2528909,15.8644068 C22.6754141,15.8644068 22.9570963,16.1355932 22.9570963,16.5423729 L22.9570963,17.220339 L22.9570963,17.220339 Z M22.9570963,20.4745763 C22.9570963,20.8813559 22.6754141,21.1525424 22.2528909,21.1525424 L20.9853211,21.1525424 C20.5627979,21.1525424 20.2811157,20.8813559 20.2811157,20.4745763 L20.2811157,19.7966102 C20.2811157,19.3898305 20.5627979,19.1186441 20.9853211,19.1186441 L22.2528909,19.1186441 C22.6754141,19.1186441 22.9570963,19.3898305 22.9570963,19.7966102 L22.9570963,20.4745763 L22.9570963,20.4745763 Z M18.8727049,10.0338983 C18.8727049,10.5762712 18.4501817,10.9830508 17.8868174,10.9830508 L6.33784867,10.9830508 C5.77448434,10.9830508 5.3519611,10.5762712 5.3519611,10.0338983 L5.3519611,3.11864407 C5.3519611,2.57627119 5.77448434,2.16949153 6.33784867,2.16949153 L17.8868174,2.16949153 C18.4501817,2.16949153 18.8727049,2.57627119 18.8727049,3.11864407 L18.8727049,10.0338983 L18.8727049,10.0338983 Z M18.7318638,21.2881356 C18.7318638,21.8305085 18.3093406,22.2372881 17.7459763,22.2372881 L6.19700759,22.2372881 C5.63364326,22.2372881 5.21112002,21.8305085 5.21112002,21.2881356 L5.21112002,14.3728814 C5.21112002,13.8305085 5.63364326,13.4237288 6.19700759,13.4237288 L17.7459763,13.4237288 C18.3093406,13.4237288 18.7318638,13.8305085 18.7318638,14.3728814 L18.7318638,21.2881356 L18.7318638,21.2881356 Z M3.8027092,4.06779661 C3.8027092,4.47457627 3.52102704,4.74576271 3.09850379,4.74576271 L1.83093406,4.74576271 C1.40841082,4.74576271 1.12672865,4.47457627 1.12672865,4.06779661 L1.12672865,3.38983051 C1.12672865,2.98305085 1.40841082,2.71186441 1.83093406,2.71186441 L3.09850379,2.71186441 C3.52102704,2.71186441 3.8027092,2.98305085 3.8027092,3.38983051 L3.8027092,4.06779661 L3.8027092,4.06779661 Z M3.8027092,7.3220339 C3.8027092,7.72881356 3.52102704,8 3.09850379,8 L1.83093406,8 C1.40841082,8 1.12672865,7.72881356 1.12672865,7.3220339 L1.12672865,6.6440678 C1.12672865,6.23728814 1.40841082,5.96610169 1.83093406,5.96610169 L3.09850379,5.96610169 C3.52102704,5.96610169 3.8027092,6.23728814 3.8027092,6.6440678 L3.8027092,7.3220339 L3.8027092,7.3220339 Z M3.8027092,10.5762712 C3.8027092,10.9830508 3.52102704,11.2542373 3.09850379,11.2542373 L1.83093406,11.2542373 C1.40841082,11.2542373 1.12672865,10.9830508 1.12672865,10.5762712 L1.12672865,9.89830508 C1.12672865,9.49152542 1.40841082,9.22033898 1.83093406,9.22033898 L3.09850379,9.22033898 C3.52102704,9.22033898 3.8027092,9.49152542 3.8027092,9.89830508 L3.8027092,10.5762712 L3.8027092,10.5762712 Z M3.8027092,13.9661017 C3.8027092,14.3728814 3.52102704,14.6440678 3.09850379,14.6440678 L1.83093406,14.6440678 C1.40841082,14.6440678 1.12672865,14.3728814 1.12672865,13.9661017 L1.12672865,13.2881356 C1.12672865,12.8813559 1.40841082,12.6101695 1.83093406,12.6101695 L3.09850379,12.6101695 C3.52102704,12.6101695 3.8027092,12.8813559 3.8027092,13.2881356 L3.8027092,13.9661017 L3.8027092,13.9661017 Z M3.8027092,17.220339 C3.8027092,17.6271186 3.52102704,17.8983051 3.09850379,17.8983051 L1.83093406,17.8983051 C1.40841082,17.8983051 1.12672865,17.6271186 1.12672865,17.220339 L1.12672865,16.5423729 C1.12672865,16.1355932 1.40841082,15.8644068 1.83093406,15.8644068 L3.09850379,15.8644068 C3.52102704,15.8644068 3.8027092,16.1355932 3.8027092,16.5423729 L3.8027092,17.220339 L3.8027092,17.220339 Z M3.8027092,20.4745763 C3.8027092,20.8813559 3.52102704,21.1525424 3.09850379,21.1525424 L1.83093406,21.1525424 C1.40841082,21.1525424 1.12672865,20.8813559 1.12672865,20.4745763 L1.12672865,19.7966102 C1.12672865,19.3898305 1.40841082,19.1186441 1.83093406,19.1186441 L3.09850379,19.1186441 C3.52102704,19.1186441 3.8027092,19.3898305 3.8027092,19.7966102 L3.8027092,20.4745763 L3.8027092,20.4745763 Z M23.8021428,0 L22.9570963,0 L22.9570963,0.271186441 L22.9570963,0.949152542 C22.9570963,1.3559322 22.6754141,1.62711864 22.2528909,1.62711864 L20.9853211,1.62711864 C20.5627979,1.62711864 20.2811157,1.3559322 20.2811157,0.949152542 L20.2811157,0.271186441 L20.2811157,0 L3.8027092,0 L3.8027092,0.271186441 L3.8027092,0.949152542 C3.8027092,1.3559322 3.52102704,1.62711864 3.09850379,1.62711864 L1.83093406,1.62711864 C1.40841082,1.62711864 1.12672865,1.3559322 1.12672865,0.949152542 L1.12672865,0.271186441 L1.12672865,0 L-6.03961325e-14,0 L-6.03961325e-14,24 L1.12672865,24 L1.12672865,23.7288136 L1.12672865,23.0508475 C1.12672865,22.6440678 1.40841082,22.3728814 1.83093406,22.3728814 L3.09850379,22.3728814 C3.52102704,22.3728814 3.8027092,22.6440678 3.8027092,23.0508475 L3.8027092,23.7288136 L3.8027092,24 L20.4219568,24 L20.4219568,23.7288136 L20.4219568,23.0508475 C20.4219568,22.6440678 20.703639,22.3728814 21.1261622,22.3728814 L22.393732,22.3728814 C22.8162552,22.3728814 23.0979374,22.6440678 23.0979374,23.0508475 L23.0979374,23.7288136 L23.0979374,24 L23.9429839,24 L23.9429839,0 L23.8021428,0 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    `;
  }
}

customElements.define('icon-video', IconVideo);
