#First argument input sequence file
#Second argument - output file name containing GC content above 60%
#Third argument - outout file name containing GC content below 60%

open(HANDEL,"$ARGV[0]") or die "can't open file:$!";
chomp (@seq=<HANDEL>);
close HANDEL;

open(OUT, ">>$ARGV[1]") or die "can't open above 60% GC content file:$! \n";
open(OUT2, ">>$ARGV[2]") or die "can't open below 60% GC content file:$! \n";
open(OUT3, ">>$ARGV[3]") or die "can't open remaining file: $! \n";

for($i=0;$i<=$#seq;$i++)

{
$seq1 = $seq[$i]; 
$genome_length = length($seq1);
$A_genome = $seq1 =~ tr/A//;
$T_genome = $seq1 =~ tr/T//;
$G_genome = $seq1 =~ tr/G//;
$C_genome = $seq1 =~ tr/C//;

$sum_AT_genome = $A_genome+$T_genome;
$sum_GC_genome = $G_genome+$C_genome;
$perc_AT_genome = ($sum_AT_genome/$genome_length)*100;
$perc_GC_genome = ($sum_GC_genome/$genome_length)*100;
print "Length = $genome_length \t A+T content = $perc_AT_genome \t G+C content = $perc_GC_genome\n";

	if ($perc_GC_genome >= 60 and $genome_length > 999)
	{
	print OUT "$seq1\n";
	}
	elsif($perc_GC_genome < 60 and $genome_length > 999)
	{
	print OUT2 "$seq1\n";
	}
	else
	{
	print OUT3 "$seq1\n";
	}
}
exit();
