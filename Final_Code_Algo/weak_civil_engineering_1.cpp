//Input: a file containing sequences of same length.(1289x89)anything.
//Outout: scores of each sequence( with respect to weak civil engineering ),frequency of A,C,G,T. also frequences of AAAA,GG,CC,TTT

#include<iostream>
#include<stdio.h>
#include <ctype.h>

using namespace std;

int main(int argc, char** argv)
{
	char arr[10000][1000];
	int i=0;
	
	if(argc !=3)
	{
		cout << "One input argument required.\n";
		return 2;
	}
	
	FILE* filename  = fopen(argv[1],"r");
	if(filename == NULL) 
	{
	  cout << "Error opening file\n";
	  return -1;
	}

        FILE* outputFile  = fopen(argv[2],"w");
        if(outputFile == NULL)
        {
          cout << "Error opening output file\n";
          return -1;
        }
	
	cout << "Scanning the given file\n";
	while( fgets(arr[i],10000,filename) )
	i++;
	int length = i-1;
	cout << "Done\n";
	
	i=0;
	int j=0;
	while(arr[i][j] != '\n')
	{
		j++;
	}
	int end = j-1;
	
	//print whole input file;
	for(i=0; i<= length;i++ )
	{
		for(j=0; j<=end;j++)
		{
			arr[i][j] = toupper(arr[i][j]);
			cout << arr[i][j];
		}
		cout <<endl;
	}
	long int counta=0,countc=0,countg=0,countt=0;
	long int countaa=0,countcc=0,countgg=0,counttt=0; 
	char last='B';
	int a[3][1000] = {{0}};
	int k=0;//iterator for array (a)
	long int sum;

	for(i=0; i <= length ;i++)
	{
	//cout << i << length<< endl;
		bool flag=1;k=0;counta=0;countc=0;countg=0;countt=0;countaa=0;countcc=0;countgg=0;counttt=0;
		for(j=0; j <= end ; j++)
		{
			
			if( (arr[i][j] == 'G' || arr[i][j] == 'g') && last=='G' )
			{
				countgg++;
			}
			else if( (arr[i][j] == 'C' || arr[i][j] == 'c') && last=='C' )
			{
				countcc++;
			}
			else if( (arr[i][j] == 'A' || arr[i][j] == 'a') && last=='A' )
			{
				countaa++;
			}
			else if( (arr[i][j] == 'T' || arr[i][j] == 't') && last=='T' )
			{
				counttt++;
			}
			
					
			
			if( (arr[i][j] =='A' || arr[i][j] =='G' || arr[i][j] =='a' || arr[i][j] =='g') && flag==0 )//from small to big
			{
				if(k==0)
				{
					a[1][k] = j;
					a[2][k] = 1;
					k++;
				}
				else
				{
					if(a[1][k-1] == j-2)
					{
						
						a[2][k-1] = a[2][k-1] + 3;
						a[1][k-1] = j;
					}
					else
					{
						a[1][k] = j;
						a[2][k] = 1;
						k++;
					}
									
				}
			}
			
			if( arr[i][j] =='A' || arr[i][j] =='G' || arr[i][j] =='a' || arr[i][j] =='g')//if big
			{
				flag=1;
							
			}
			
			if( arr[i][j] =='T' || arr[i][j] =='C' || arr[i][j] =='t' || arr[i][j] =='c')//if small
			{
				flag=0;
				
			}
			
			if(arr[i][j] == 'A' || arr[i][j] == 'a')
			{
				counta++;
				last='A';
			}
			else if(arr[i][j] == 'G' || arr[i][j] == 'g')
			{
				countg++;
				last='G';
			}
			else if(arr[i][j] == 'C' || arr[i][j] == 'c')
			{
				countc++;
				last='C';				
			}
			else if(arr[i][j] == 'T' || arr[i][j] == 't')
			{
				countt++;
				last='T';
			}
			
			
			
		}
		sum=0;
		for (int temp=0; temp < k; temp++)
		{
			sum = sum + a[2][temp];
			a[1][temp] = 0;
			a[2][temp] = 0;
		}
	
	 cout << i+1 <<") score:" << sum <<"  f-A:"<<counta<<"   f-T:"<<countt<<"   f-G:"<<countg<<"   f-C:"<<countc<<"   A->:"<<countaa<<"   T->:"<<counttt<<"   G->:"<<countgg<<"   C->:"<<countcc<< endl;	
fprintf(outputFile,"%d score: %d   f-A: %d   f-T: %d   f-G: %d  f-C: %d   A->: %d  T->: %d  G->: %d  C->: %d \n" ,i+1, sum ,counta,countt,countg,countc,countaa,counttt,countgg,countcc);

	}
	
fclose(outputFile);	
}
