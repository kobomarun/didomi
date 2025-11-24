export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  alt: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Working with Didomi Consortium has revolutionized our approach to digital learning. Their solutions are intuitive, engaging, and have significantly improved student outcomes."',
    name: "Dr. Aliyah Khan",
    role: "Head of Academics, FutureLearn Institute",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBv5hw1rT0L4CwHTlpPfgzolCA3cZsoOK0O9X5bXnhTS-1OI5-vINNFu9Txn0cuBLPol-Y-dPmXXagmE5GFS94OyKnlXic-NTSW6W3yvLk6RG4PdctwVvoXsZJ9mcz65j1jSfHXslmH8gQSYDnx6b0k_wpvgAvZh834RxUhHffL6DXwJpmfcR6POVFZl1R6-S9wP0jhdyl-yQ8k0igki6gUrAHHNmZNKL6y6bqAOLgk-rDBqVbTdWytct75fk3Se_alHrcKODbyJ5s",
    alt: "Portrait of Dr. Aliyah Khan",
  },
  {
    quote:
      '"The technological infrastructure provided by Didomi is second to none. Their expertise helped us scale our operations efficiently and securely."',
    name: "Michael Chen",
    role: "CTO, Innovatech Solutions",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnBBqBrotStdTeFCpn5JL8DwjZGP85mrPlPc1VLZ7jLtGZwJHcmWcQL-fY4YUnlpDi_bE28hbYIMyAL9ime7Nb4MGvl6pnYLNHNeTvQTvZ0EROmXJUZjRVzNDqYhiI-DFINRVcJqKx2LJCmQSbsNFtmsaic_Km_h7lHirRVsX6EM3I64A9Rg-IoKrnyyE53nplaDpig9H82Ld-PUl_Ad3G121vcMBXqm6BYyV0M8JI_U73Zc_O2N76ngNnhVVY3pvXT3pK3FyJw4k",
    alt: "Portrait of Michael Chen",
  },
  {
    quote:
      '"Their commitment to sustainable agriculture has transformed our yields. Didomi\'s blend of tradition and tech is truly groundbreaking for the farming community."',
    name: "Fatima Diallo",
    role: "Founder, GreenAcre Farms",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApKv3KxjDr3eH6A3oL6h2vTJLp5OIW4rx7R1497L3ekF-GB1OcoyGx6c-h_EPqWbOhysKYl6WD_BGChXqxkgN90sjoCUhvBy11lJithXGF3TZ3gibl6s-OMxMbyOdhm1751vgCzgJ65oIKzjB4AE5-1evlAMWXORZT733ay0OIJ58DpvbrfpufETcPv5eCC4_VCsjLTB-v3zSdBBkjoRKldj56OjCWjieY_HoFBSUdUPu7ma_g0GXLGxRIozhnUuL001ohtbBhq4c",
    alt: "Portrait of Fatima Diallo",
  },
];
