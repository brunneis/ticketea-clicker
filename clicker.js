/*  Ticketea Clicker
 *  Copyright (C) 2018 Rodrigo Martínez <dev@brunneis.com>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// Number of tickets to reserve
const NO_TICKETS=6;
const NO_TRIES=50;
const SLEEP_MILLIS=0;
 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 
$("#start-purchase-process-desktop").click();
var tries = 0;
const continueButton = $('#continue-button');
while(!continueButton.is(":visible")) {
  $('#select-ticket-0').val(String(NO_TICKETS));
  $('#select-ticket-0').change();
  tries++;
  if (tries > NO_TRIES) {
    location.reload();
    break;
  }
  await sleep(SLEEP_MILLIS);
}
continueButton.click();
