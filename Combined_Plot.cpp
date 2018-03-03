//Program to print dinucleotide INTRA value of each sequence in eleven different file having values for seperate parameter
//INPUT: this program is called from another shell script, run.sh
//OUTPUT: The files are printed in Data directory in same folder. 
#include<ctype.h>
#include<cstring>
#include<iostream>
#include<cmath>
#include<string.h>
 
using namespace std;

int main(int argc,char *argv[])
{ 
char* b_arr2=argv[1];
FILE *fq_a=fopen(argv[2],"a+");
FILE *fq_b=fopen(argv[3],"a+");
FILE *fq_c=fopen(argv[4],"a+");
FILE *fq_d=fopen(argv[5],"a+");
FILE *fq_e=fopen(argv[6],"a+");
FILE *fq_f=fopen(argv[7],"a+");
FILE *fq_g=fopen(argv[8],"a+");
FILE *fq_h=fopen(argv[9],"a+");
FILE *fq_i=fopen(argv[10],"a+");
FILE *fq_j=fopen(argv[11],"a+");
FILE *fq_k=fopen(argv[12],"a+");
FILE *fq_l=fopen(argv[13],"a+");
FILE *fq_m=fopen(argv[14],"a+");
FILE *fq_n=fopen(argv[15],"a+");
FILE *fq_o=fopen(argv[16],"a+");
FILE *fq_p=fopen(argv[17],"a+");
FILE *fq_q=fopen(argv[18],"a+");
FILE *fq_r=fopen(argv[19],"a+");
FILE *fq_s=fopen(argv[20],"a+");
FILE *fq_t=fopen(argv[21],"a+");
FILE *fq_u=fopen(argv[22],"a+");
FILE *fq_v=fopen(argv[23],"a+");
FILE *fq_w=fopen(argv[24],"a+");
FILE *fq_x=fopen(argv[25],"a+");
FILE *fq_y=fopen(argv[26],"a+");
FILE *fq_z=fopen(argv[27],"a+");
FILE *fq_aa=fopen(argv[28],"a+");
FILE *fq_ab=fopen(argv[29],"a+");
FILE *fq_ac=fopen(argv[30],"a+");
FILE *fq_ad=fopen(argv[31],"a+");
FILE *fq_ae=fopen(argv[32],"a+");

int m=0;
double noofbases=0;
long double a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,ma=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,aa=0,ab=0,ac=0,ad=0,ae=0; 

	noofbases = strlen(b_arr2);
	if (noofbases == 0)
	{
	exit(0);
	}
	noofbases--;
		for(m=1;m<noofbases;m++)
		{
        		if((b_arr2[m-1]=='A'||b_arr2[m-1]=='a') && (b_arr2[m] =='A' || b_arr2[m] =='a'))
                                {
				a=-0.30; b=0.05; c=0.57; d=0.75; e=1.48; f=-0.14; g=0.16; h=-0.02; i=-1.04; j=15.36; k=-2.99; l=-0.11; ma=-0.20; n=3.25; o=0.63; p=-0.08; q=35.67; r=3.27; s=35.56; t=-53.46; u=41.15; v=48.69; w=133.56; x=-1.43; y=-95.86; z=-108.49; aa=118.36; ab=39.27; ac=-5.44; ad=-26.71; ae=-171.84;
				fprintf(fq_a, "%Lf\n", a);
				fprintf(fq_b, "%Lf\n", b);
				fprintf(fq_c, "%Lf\n", c);
				fprintf(fq_d, "%Lf\n", d);
				fprintf(fq_e, "%Lf\n", e);
				fprintf(fq_f, "%Lf\n", f);
				fprintf(fq_g, "%Lf\n", g);
				fprintf(fq_h, "%Lf\n", h);
				fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
      				fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if((b_arr2[m-1]=='T' || b_arr2[m-1]=='t') && (b_arr2[m] =='T' || b_arr2[m] =='t'))
                                {
				a=-0.16; b=-0.07; c=-2.43; d=0.36; e=1.33; f=0.10; g=-0.20; h=0.28; i=-5.60; j=-15.22; k=3.43; l=-0.11; ma=-0.20; n=3.25; o=0.63; p=-0.08; q=35.67; r=3.27; s=35.56; t=-59.28; u=68.72; v=54.49; w=119.18; x=-13.95; y=-98.07; z=-113.39; aa=119.53; ab=38.50; ac=-5.44; ad=-26.71; ae=-171.84;

				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
				fprintf(fq_l, "%Lf\n", l);
				fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
			else if((b_arr2[m-1]=='G' || b_arr2[m-1]=='g') && (b_arr2[m] =='G' || b_arr2[m] =='g'))
                                {
				a=0.61; b=0.06; c=17.90; d=2.71; e=3.02; f=2.10; g=-2.33; h=2.53; i=14.79; j=11.03; k=9.00; l=0.38; ma=0.71; n=2.96; o=-1.62; p=-2.55; q=29.49; r=2.73; s=31.57; t=-24.94; u=57.43; v=53.11; w=139.26; x=-54.51; y=-62.07; z=-100.34; aa=98.24; ab=37.03; ac=-8.48; ad=-26.28; ae=-166.76;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);
			
				}
	                else if((b_arr2[m-1]=='C'|| b_arr2[m-1]=='c') && (b_arr2[m] =='C'||b_arr2[m] =='c'))
        	                {
				a=0.54; b=-0.32; c=-3.78; d=3.85; e=1.84; f=0.42; g=-0.01; h=0.88; i=3.35; j=0.80; k=2.69; l=0.38; ma=0.71; n=2.96; o=-1.62; p=-2.55; q=29.49; r=2.73; s=31.57; t=-51.70; u=22.18; v=36.88; w=120.73; x=-58.92; y=-61.23; z=-107.48; aa=94.1; ab=37.68; ac=-8.48; ad=-26.28; ae=-166.76;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if((b_arr2[m-1]=='T'||b_arr2[m-1]=='t') && (b_arr2[m] =='A'|| b_arr2[m] =='a'))
                         	{
				a=0.10; b=-0.29; c=0.55; d=-0.77; e=1.47; f=0.03; g=-0.18; h=0.08; i=-0.33; j=-14.04; k=3.31; l=-0.05; ma=0.37; n=3.39; o=-2.71; p=1.74; q=32.05; r=3.41; s=32.00; t=-50.82; u=29.23; v=53.74; w=127.84; x=-37.72; y=-61.97; z=-106.74; aa=119.92; ab=37.82; ac=-5.83; ad=-26.90; ae=-174.35;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if((b_arr2[m-1]=='C'|| b_arr2[m-1]=='c') && (b_arr2[m] =='G'|| b_arr2[m] =='g'))
        	                {
				a=0.70; b=0.06; c=2.91; d=0.30; e=1.49; f=0.36; g=-0.36; h=0.56; i=2.41; j=-3.28; k=-0.85; l=0.24; ma=0.68; n=3.33; o=1.75; p=4.29; q=37.38; r=3.33; s=39.10; t=-43.17; u=57.55; v=51.50; w=132.61; x=-67.01; y=-62.64; z=-106.58; aa=103.2; ab=37.95; ac=-8.05; ad=-27.93; ae=-176.88;

				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if((b_arr2[m-1]=='G'||b_arr2[m-1]=='g') && (b_arr2[m] =='C'||b_arr2[m] =='c'))
                        	{
				a=0.59; b=0.08; c=0.36; d=2.51; e=1.24; f=0.02; g=-0.14; h=0.28; i=-0.98; j=-10.44; k=-1.12; l=-0.28; ma=0.17; n=3.35; o=-2.68; p=-5.28; q=31.09; r=3.29; s=30.56; t=-48.26; u=36.96; v=36.64; w=129.95; x=-70.50; y=-63.97; z=-109.98; aa=84.87; ab=38.59; ac=-8.72; ad=-28.13; ae=-165.58;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if((b_arr2[m-1]=='A'||b_arr2[m-1]=='a') && (b_arr2[m] =='T'||b_arr2[m] =='t'))
        	                {
				 a=-0.18; b=-0.03; c=-0.26; d=0.46; e=1.21; f=0.01; g=-0.13; h=0.15; i=0.28; j=-16.54; k=4.11; l=-0.06; ma=-0.44; n=3.31; o=-0.90; p=-2.62; q=33.42; r=3.33; s=33.68; t=-51.91; u=59.98; v=47.17; w=125.84; x=-31.23; y=-93.60; z=-113.73; aa=107.85; ab=40.01; ac=-5.35; ad=-27.20; ae=-173.70;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if((b_arr2[m-1]=='A'||b_arr2[m-1]=='a') && (b_arr2[m] =='C'||b_arr2[m] =='c'))
                        	{
				a=0.20; b=-0.07; c=-1.53; d=4.66; e=1.65; f=0.15; g=-0.08; h=0.77; i=-7.83; j=-10.03; k=4.27; l=-0.12; ma=0.73; n=3.66; o=-4.75; p=-0.60; q=34.79; r=2.97; s=37.60; t=-44.87; u=43.41; v=42.43; w=127.84; x=-56.57; y=-41.16; z=-118.68; aa=92.67; ab=39.85; ac=-7.14; ad=-27.73; ae=-171.11;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if((b_arr2[m-1]=='G'||b_arr2[m-1]=='g') && (b_arr2[m] =='T'||b_arr2[m] =='t'))
        	                {
				 a=-0.31; b=-0.02; c=3.38; d=-0.12; e=0.76; f=-0.12; g=-0.20; h=0.20; i=-1.33; j=-9.48; k=-1.97; l=-0.12; ma=0.73; n=3.66; o=-4.75; p=-0.60; q=34.79; r=2.97; s=37.60; t=-46.40; u=40.13; v=66.36; w=125.39; x=-0.09; y=-78.23; z=-113.25; aa=127.35; ab=36.80; ac=-7.14; ad=-27.73; ae=-171.11; 
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

                		}
			else if((b_arr2[m-1]=='C'||b_arr2[m-1]=='c') && (b_arr2[m] =='A'||b_arr2[m] =='a'))
                        	{
				a=0.26; b=-0.27; c=3.06; d=-0.57; e=0.97; f=0.09; g=-0.15; h=0.24; i=0.22; j=-10.53; k=3.02; l=-0.07; ma=0.52; n=3.29; o=-3.27; p=1.54; q=36.74; r=3.21; s=37.25; t=-49.95; u=48.33; v=21.94; w=132.85; x=-82.03; y=-70.58; z=-99.35; aa=75.64; ab=39.46; ac=-7.01; ad=-27.15; ae=-179.01;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if((b_arr2[m-1]=='T'||b_arr2[m-1]=='t') && (b_arr2[m] =='G'||b_arr2[m] =='g'))
        	                {
				a=0.37; b=0.13; c=2.95; d=0.92; e=1.14; f=-0.11; g=-0.15; h=0.05; i=-0.10; j=-11.18; k=0.94; l=-0.07; ma=0.52; n=3.29; o=-3.27; p=1.54; q=36.74; r=3.21; s=37.25; t=-54.96; u=31.41; v=54.48; w=129.46; x=-66.88; y=-45.88; z=-80.34; aa=71.5; ab=37.72; ac=-7.01; ad=-27.15; ae=-179.01;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if((b_arr2[m-1]=='A'||b_arr2[m-1]=='a') && (b_arr2[m] =='G'||b_arr2[m] =='g'))
                        	{
				 a=0.26; b=0.25; c=2.17; d=0.26; e=1.73; f=0.15; g=-0.14; h=-0.13; i=1.18; j=-11.89; k=-3.66; l=-0.27; ma=0.21; n=3.02; o=3.69; p=-7.27; q=31.00; r=3.06; s=19.06; t=-43.67; u=40.44; v=56.13; w=129.45; x=-24.57; y=-40.17; z=-95; aa=82.29; ab=38.59; ac=-6.27; ad=-26.89; ae=-174.93; 
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if((b_arr2[m-1]=='C'||b_arr2[m-1]=='c') && (b_arr2[m] =='T'||b_arr2[m] =='t'))
             	                {
				 a=0.76; b=-0.36; c=1.42; d=7.88; e=1.56; f=-0.32; g=-0.20; h=-0.17; i=-3.29; j=-11.55; k=-3.68; l=-0.27; ma=0.21; n=3.02; o=3.69; p=-7.27; q=31.00; r=3.06; s=19.06; t=-23.58; u=28.9; v=23.10; w=130.80; x=-75.76; y=-25.08; z=-77.07; aa=57.48; ab=39.52; ac=-6.27; ad=-26.89; ae=-174.93; 
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if((b_arr2[m-1]=='G'||b_arr2[m-1]=='g') && (b_arr2[m] =='A'||b_arr2[m] =='a'))
                        	{
      				a=-0.37; b=0.01; c=2.49; d=0.20; e=0.97; f=0.08; g=-0.17; h=0.12; i=6.19; j=-12.40; k=1.59; l=0.04; ma=-0.20; n=3.32; o=2.21; p=2.69; q=37.74; r=3.33; s=37.81; t=-38.95; u=43.75; v=59.92; w=133.22; x=1.98; y=-95.11; z=-112.45; aa=117.49; ab=38.28; ac=-7.80; ad=-26.78; ae=-167.60;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if((b_arr2[m-1]=='T'||b_arr2[m-1]=='t') && (b_arr2[m] =='C'||b_arr2[m] =='c'))
        	                {
				a=0.11; b=0.16; c=-1.93; d=1.45; e=1.44; f=0.01; g=-0.23; h=0.34; i=-10.37; j=-14.05; k=0.13; l=0.04; ma=-0.20; n=3.32; o=2.21; p=2.69; q=37.74; r=3.33; s=37.81; t=-48.09; u=71.46; v=43.54; w=128.74; x=-23.17; y=-92.33; z=-108.78; aa=119.22; ab=37.44; ac=-7.80; ad=-26.78; ae=-167.60;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if((b_arr2[m-1]=='A'||b_arr2[m-1]=='a') && (b_arr2[m] =='N'||b_arr2[m] =='n'))
                        	{
				 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if((b_arr2[m-1]=='T'||b_arr2[m-1]=='t') && (b_arr2[m] =='N'||b_arr2[m] =='n'))
        	                {
		        	 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if(b_arr2[m-1]=='G' && b_arr2[m] =='N')
                        	{
				 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if(b_arr2[m-1]=='C' && b_arr2[m] =='N')
        	                {
				 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if(b_arr2[m-1]=='N' && b_arr2[m] =='A')
                        	{
				 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if(b_arr2[m-1]=='N' && b_arr2[m] =='T')
        	                {
				 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if(b_arr2[m-1]=='N' && b_arr2[m] =='G')
                        	{
				 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
	                else if(b_arr2[m-1]=='N' && b_arr2[m] =='C')
        	                {
				 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
                	else if(b_arr2[m-1]=='N' && b_arr2[m] =='N')
                        	{
				 a=0.20; b=-0.04; c=1.74; d=1.55; e=1.46; f=0.18; g=-0.28; h=0.39; i=-0.15; j=-7.71; k=1.14; l=-0.03; ma=0.26; n=3.29; o=-0.77; p=-0.81; q=33.94; r=3.19; s=33.42; t=-45.87; u=45.06; v=46.88; w=129.17; x=-41.40; y=-88; z=-104.48; aa=99.36; ab=38.41; ac=-7.01; ad=-27.07; ae=-172.06;
				fprintf(fq_a, "%Lf\n", a);
                                fprintf(fq_b, "%Lf\n", b);
                                fprintf(fq_c, "%Lf\n", c);
                                fprintf(fq_d, "%Lf\n", d);
                                fprintf(fq_e, "%Lf\n", e);
                                fprintf(fq_f, "%Lf\n", f);
                                fprintf(fq_g, "%Lf\n", g);
                                fprintf(fq_h, "%Lf\n", h);
                                fprintf(fq_i, "%Lf\n", i);
                                fprintf(fq_j, "%Lf\n", j);
                                fprintf(fq_k, "%Lf\n", k);
                                fprintf(fq_l, "%Lf\n", l);
                                fprintf(fq_m, "%Lf\n", ma);
                                fprintf(fq_n, "%Lf\n", n);
                                fprintf(fq_o, "%Lf\n", o);
                                fprintf(fq_p, "%Lf\n", p);
                                fprintf(fq_q, "%Lf\n", q);
                                fprintf(fq_r, "%Lf\n", r);
                                fprintf(fq_s, "%Lf\n", s);
                                fprintf(fq_t, "%Lf\n", t);
                                fprintf(fq_u, "%Lf\n", u);
                                fprintf(fq_v, "%Lf\n", v);
                                fprintf(fq_w, "%Lf\n", w);
                                fprintf(fq_x, "%Lf\n", x);
                                fprintf(fq_y, "%Lf\n", y);
                                fprintf(fq_z, "%Lf\n", z);
                                fprintf(fq_aa, "%Lf\n", aa);
                                fprintf(fq_ab, "%Lf\n", ab);
                                fprintf(fq_ac, "%Lf\n", ac);
                                fprintf(fq_ad, "%Lf\n", ad);
                                fprintf(fq_ae, "%Lf\n", ae);

				}
        	}
	
	a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,ma=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,aa=0,ab=0,ac=0,ad=0,ae=0; 
       	
	fclose(fq_a);
	fclose(fq_b);
	fclose(fq_c);
	fclose(fq_d);
	fclose(fq_e);
	fclose(fq_f);
	fclose(fq_g);
	fclose(fq_h);
	fclose(fq_i);
    fclose(fq_j);
    fclose(fq_k);
	fclose(fq_l);
	fclose(fq_m);
	fclose(fq_n);
	fclose(fq_o);
	fclose(fq_p);
	fclose(fq_q);
	fclose(fq_r);
	fclose(fq_s);
	fclose(fq_t);
    fclose(fq_u);
    fclose(fq_v);
	fclose(fq_w);
	fclose(fq_x);
	fclose(fq_y);
	fclose(fq_z);
	fclose(fq_aa);
	fclose(fq_ab);
	fclose(fq_ac);
	fclose(fq_ad);
	fclose(fq_ae);

}    
