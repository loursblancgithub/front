function generateCFaIconFromSVG(name: string, svg: string): any{
    return {
        prefix: name,
        iconName: name,
        icon: [512, 512, [], "", svg]
    }
}

export const cFaCross = generateCFaIconFromSVG("custom-cross", "M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z")
export const cFaArrow = generateCFaIconFromSVG("custom-arrow", "M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z")
export const cFaBellFull = generateCFaIconFromSVG("full-bell", "m 455.418,360.813 c -32.254,-27.266 -50.75,-67.118 -50.75,-109.336 V 192 c 0,-75.07 -55.766,-137.215 -128,-147.625 V 21.332 C 276.668,9.535 267.109,0 255.332,0 243.559,0 234,9.535 234,21.332 V 44.375 C 161.742,54.785 106,116.93 106,192 v 59.477 c 0,42.218 -18.496,82.07 -50.945,109.503 A 37.272,37.272 0 0 0 42,389.332 c 0,20.59 16.746,37.336 37.332,37.336 h 352 c 20.59,0 37.336,-16.746 37.336,-37.336 0,-10.922 -4.758,-21.246 -13.25,-28.52 z m 0,0 M 255.332,512 c 38.637,0 70.957,-27.543 78.379,-64 H 176.953 c 7.426,36.457 39.746,64 78.379,64 z m 0,0")
export const cFaBellOutline = generateCFaIconFromSVG("outline-bell", "m 255.33203,96 c -8.83203,0 -16,-7.167969 -16,-16 V 16 c 0,-8.832031 7.16797,-16 16,-16 8.83203,0 16,7.167969 16,16 v 64 c 0,8.832031 -7.16797,16 -16,16 z m 0,0 m 176,352 H 79.332031 C 58.746094,448 42,431.25391 42,410.66797 42,399.74219 46.757812,389.39844 55.054688,382.29297 87.503906,354.87891 106,315.03125 106,272.8125 V 213.33203 C 106,130.98828 172.98828,64 255.33203,64 c 82.34766,0 149.33594,66.98828 149.33594,149.33203 v 59.48047 c 0,42.21875 18.49609,82.06641 50.73047,109.33203 8.51172,7.25391 13.26953,17.59766 13.26953,28.52344 0,20.58594 -16.7461,37.33203 -37.33594,37.33203 z m -176,-352 C 190.62891,96 138,148.62891 138,213.33203 V 272.8125 C 138,324.45703 115.36719,373.22656 75.921875,406.57031 75.171875,407.21094 74,408.53516 74,410.66797 74,413.56641 76.433594,416 79.332031,416 H 431.33203 c 2.90234,0 5.33594,-2.43359 5.33594,-5.33203 0,-2.13281 -1.17578,-3.45703 -1.87891,-4.05469 C 395.30078,373.22656 372.66797,324.45703 372.66797,272.8125 V 213.33203 C 372.66797,148.62891 320.03906,96 255.33203,96 Z m 0,0 m 0,416 c -44.11719,0 -80,-35.88281 -80,-80 0,-8.83203 7.16797,-16 16,-16 8.83203,0 16,7.16797 16,16 0,26.47656 21.52734,48 48,48 26.47656,0 48,-21.52344 48,-48 0,-8.83203 7.16797,-16 16,-16 8.83203,0 16,7.16797 16,16 0,44.11719 -35.88281,80 -80,80 z m 0,0")
export const cFaCompassFull = generateCFaIconFromSVG("compass-full", "m 273.85,242.864 a 28.181999,28.181999 0 0 1 -28.182,28.182 28.181999,28.181999 0 0 1 -28.182,-28.182 28.181999,28.181999 0 0 1 28.182,-28.182 28.181999,28.181999 0 0 1 28.182,28.182 z m -28.182,248.472 c 135.678,0 245.668,-109.988 245.668,-245.668 C 491.336,109.989 381.346,0 245.668,0 109.989,0 0,109.989 0,245.668 0,381.348 109.989,491.336 245.668,491.336 Z M 196.752,196.752 371.209,120.124 294.584,294.582 120.126,371.21 Z")
export const cFaHomeFull = generateCFaIconFromSVG("home-full", "m 498.19531,222.69531 c -0.0117,-0.0117 -0.0234,-0.0234 -0.0351,-0.0352 L 289.30469,13.8125 C 280.40234,4.90625 268.56641,0 255.97656,0 243.38672,0 231.55078,4.902344 222.64453,13.808594 L 13.898438,222.55078 c -0.07031,0.0703 -0.140626,0.14453 -0.210938,0.21484 -18.28125,18.38672 -18.25,48.21875 0.08984,66.5586 8.378906,8.38281 19.445312,13.23828 31.277344,13.74609 0.480468,0.0469 0.964843,0.0703 1.453124,0.0703 h 8.324219 V 456.83984 C 54.832031,487.25391 79.578125,512 110,512 h 81.71094 c 8.28125,0 15,-6.71484 15,-15 V 376.5 c 0,-13.87891 11.28906,-25.16797 25.16797,-25.16797 h 48.19531 c 13.87891,0 25.16797,11.28906 25.16797,25.16797 V 497 c 0,8.28516 6.71484,15 15,15 h 81.71094 c 30.42187,0 55.16796,-24.74609 55.16796,-55.16016 V 303.14062 h 7.71875 c 12.58594,0 24.42188,-4.90234 33.33204,-13.80859 18.35937,-18.37109 18.36718,-48.2539 0.0234,-66.63672 z m 0,0")
export const cFaHomeOutline = generateCFaIconFromSVG("home-outline", "m 498.69922,222.69531 c -0.0156,-0.0117 -0.0274,-0.0273 -0.0391,-0.0391 L 289.80469,13.808594 C 280.90234,4.902344 269.06641,0 256.47656,0 243.88672,0 232.05078,4.902344 223.14453,13.808594 L 14.398438,222.55078 c -0.07031,0.0703 -0.144532,0.14453 -0.210938,0.21484 -18.28125,18.38672 -18.25,48.21875 0.08984,66.5586 8.378906,8.38281 19.441406,13.23437 31.273437,13.74609 0.484375,0.0469 0.96875,0.0703 1.457031,0.0703 h 8.320313 v 153.69532 c 0,30.41797 24.75,55.16406 55.167965,55.16406 h 81.71094 c 8.28516,0 15,-6.71875 15,-15 V 376.5 c 0,-13.87891 11.29297,-25.16797 25.17188,-25.16797 h 48.19531 c 13.87891,0 25.16797,11.28906 25.16797,25.16797 V 497 c 0,8.28125 6.71484,15 15,15 h 81.71094 c 30.42187,0 55.16796,-24.74609 55.16796,-55.16406 V 303.14062 h 7.71875 c 12.58594,0 24.42188,-4.90234 33.33204,-13.8125 18.35937,-18.36718 18.36718,-48.2539 0.0273,-66.63281 z m -21.24219,45.42188 c -3.23828,3.23828 -7.54297,5.02343 -12.11719,5.02343 h -22.71875 c -8.28515,0 -15,6.71485 -15,15 v 168.69532 c 0,13.875 -11.28906,25.16406 -25.16797,25.16406 H 335.74219 V 376.5 c 0,-30.41797 -24.7461,-55.16797 -55.16797,-55.16797 h -48.19531 c -30.42188,0 -55.17188,24.75 -55.17188,55.16797 V 482 H 110.49609 C 96.621094,482 85.328125,470.71094 85.328125,456.83594 V 288.14062 c 0,-8.28515 -6.714844,-15 -15,-15 H 48 c -0.234375,-0.0156 -0.464844,-0.0273 -0.703125,-0.0312 -4.46875,-0.0781 -8.660156,-1.85156 -11.800781,-4.99609 -6.679688,-6.67969 -6.679688,-17.55078 0,-24.23437 0.0039,0 0.0039,-0.004 0.0078,-0.008 l 0.01172,-0.0117 L 244.36328,35.019531 C 247.59766,31.78125 251.89844,30 256.47656,30 c 4.57422,0 8.875,1.78125 12.11328,5.019531 L 477.39062,243.81641 c 0.0312,0.0312 0.0664,0.0625 0.0977,0.0937 6.64453,6.6914 6.63281,17.53906 -0.0312,24.20703 z m 0,0")
export const cFaCalendarOutline = generateCFaIconFromSVG("calendar-outline", "M 457.14285,54.857141 H 383.99999 V 18.285713 a 18.285715,18.285715 0 0 0 -36.57143,0 V 54.857141 H 164.57142 V 18.285713 a 18.285714,18.285714 0 0 0 -36.57142,0 V 54.857141 H 54.857141 A 54.857142,54.857142 0 0 0 -1e-6,109.71428 v 347.42857 a 54.857142,54.857142 0 0 0 54.857142,54.85714 H 457.14285 a 54.857142,54.857142 0 0 0 54.85714,-54.85714 V 109.71428 A 54.857142,54.857142 0 0 0 457.14285,54.857141 Z m 0,420.571419 H 54.857141 A 18.285714,18.285714 0 0 1 36.571427,457.14285 V 219.42857 H 383.99999 a 18.285715,18.285715 0 0 0 0,-36.57143 H 36.571427 V 109.71428 A 18.285714,18.285714 0 0 1 54.857141,91.428569 H 128 V 128 a 18.285714,18.285714 0 0 0 36.57142,0 V 91.428569 H 347.42856 V 128 a 18.285715,18.285715 0 0 0 36.57143,0 V 91.428569 h 73.14286 a 18.285714,18.285714 0 0 1 18.28571,18.285711 v 73.14286 h -36.57143 a 18.285715,18.285715 0 0 0 0,36.57143 h 36.57143 v 237.71428 a 18.285714,18.285714 0 0 1 -18.28571,18.28571 z")
export const cFaCalendarFull = generateCFaIconFromSVG("calendar-full", "M 110.61302,54.956463 H 383.98367 V 155.0259 H 110.61302 Z M 0.03266974,219.48038 H 511.96733 v 237.64565 a 53.021804,53.01326 0 0 1 -54.85014,54.84131 H 54.882813 A 53.021804,53.01326 0 0 1 0.03266974,457.12603 Z M 511.96733,109.79777 v 73.12174 H 0.03266974 V 109.79777 A 53.021804,53.01326 0 0 1 54.882813,54.956463 H 128.01634 V 128.0782 a 16.455043,16.452391 0 0 0 18.28338,18.28044 16.455043,16.452391 0 0 0 18.28338,-18.28044 V 54.956463 H 347.4169 V 128.0782 a 18.283385,18.280438 0 0 0 36.56677,0 V 54.956463 h 73.13352 a 53.021804,53.01326 0 0 1 54.85014,54.841307 z M 164.5831,54.956463 H 128.01634 V 18.395594 A 16.455043,16.452391 0 0 1 146.29972,0.11515942 16.455043,16.452391 0 0 1 164.5831,18.395594 Z M 383.98367,18.395594 a 18.283385,18.280438 0 0 0 -36.56677,0 v 36.560869 h 36.56677 z")
export const cFaLinkWorld = generateCFaIconFromSVG("link-world", "M437.019,74.981C388.667,26.628,324.38,0,256,0C187.62,0,123.332,26.628,74.981,74.98C26.628,123.332,0,187.62,0,256 s26.628,132.667,74.981,181.019C123.332,485.371,187.62,511.999,256,511.999c68.381,0,132.667-26.628,181.02-74.981 c48.351-48.351,74.98-112.639,74.98-181.019S485.371,123.332,437.019,74.981z M96.216,96.216 c22.511-22.511,48.938-39.681,77.742-50.888c-7.672,9.578-14.851,20.587-21.43,32.969c-7.641,14.38-14.234,30.173-19.725,47.042 c-19.022-3.157-36.647-7.039-52.393-11.595C85.345,107.678,90.61,101.822,96.216,96.216z M62.229,139.585 c18.417,5.897,39.479,10.87,62.461,14.809c-6.4,27.166-10.167,56.399-11.066,86.591H30.536 C32.896,204.752,43.778,170.172,62.229,139.585z M60.594,369.638c-17.455-29.899-27.769-63.481-30.059-98.623h83.146 c0.982,29.329,4.674,57.731,10.858,84.186C101.085,359.003,79.494,363.85,60.594,369.638z M96.216,415.784 c-6.38-6.381-12.322-13.081-17.831-20.055c16.323-4.526,34.571-8.359,54.214-11.433c5.53,17.103,12.194,33.105,19.928,47.662 c7.17,13.493,15.053,25.349,23.51,35.505C146.427,456.28,119.268,438.834,96.216,415.784z M240.984,478.115 c-22.808-6.389-44.384-27.217-61.936-60.249c-6.139-11.552-11.531-24.155-16.15-37.587c24.73-2.722,51.045-4.331,78.086-4.709 V478.115z M240.984,345.537c-29.988,0.409-59.217,2.292-86.59,5.507c-6.038-24.961-9.671-51.978-10.668-80.028h97.259V345.537z  M240.984,240.984h-97.315c0.911-28.834,4.602-56.605,10.828-82.201c27.198,3.4,56.366,5.468,86.487,6.06V240.984z  M240.984,134.808c-27.146-0.547-53.403-2.317-77.958-5.205c4.591-13.292,9.941-25.768,16.022-37.215 c17.551-33.032,39.128-53.86,61.936-60.249V134.808z M450.717,141.18c17.874,30.193,28.427,64.199,30.749,99.804h-83.088 c-0.889-29.844-4.584-58.749-10.85-85.647C410.661,151.601,431.984,146.848,450.717,141.18z M415.783,96.216 c6.029,6.029,11.661,12.349,16.914,18.91c-16.073,4.389-33.972,8.114-53.204,11.112c-5.548-17.208-12.243-33.305-20.02-47.941 c-6.579-12.382-13.758-23.391-21.43-32.969C366.845,56.535,393.273,73.705,415.783,96.216z M271.016,271.016h97.259 c-1.004,28.268-4.686,55.49-10.81,80.612c-27.194-3.381-56.349-5.43-86.449-6.006V271.016z M271.016,240.984v-76.041 c30.005-0.394,59.257-2.261,86.656-5.464c6.125,25.403,9.756,52.932,10.659,81.505H271.016z M271.014,32.139h0.001 c22.808,6.389,44.384,27.217,61.936,60.249c6.178,11.627,11.601,24.318,16.24,37.848c-24.763,2.712-51.108,4.309-78.177,4.674 V32.139z M271.016,478.115V375.657c27.12,0.532,53.357,2.286,77.903,5.156c-4.579,13.232-9.911,25.654-15.967,37.053 C315.4,450.898,293.824,471.726,271.016,478.115z M415.783,415.784c-23.051,23.051-50.21,40.496-79.821,51.678 c8.457-10.156,16.34-22.011,23.51-35.504c7.62-14.341,14.198-30.088,19.68-46.906c19.465,3.213,37.473,7.186,53.515,11.859 C427.424,403.457,421.801,409.765,415.783,415.784z M450.606,371.009c-18.635-5.991-40-11.032-63.326-15.01 c6.296-26.68,10.048-55.36,11.041-84.983h83.146C479.139,306.694,468.549,340.769,450.606,371.009z")