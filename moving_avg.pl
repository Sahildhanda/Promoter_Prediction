
use strict;

my($sum, $j, $mean, @array, $i, $x, $sd, $sq, $y, $k, $s);
$mean=0; $sd=0; $sq=0;
my $name=$ARGV[0];
open(HANDEL,"$name") or die "can't open $name: $!\n";
my $dir=$ARGV[1];
my $out_name="$name.moving";
open (OUT, ">>/coe1/external/dixit/Promoter_perdication/Streptomyces_coeli/Pri_Moving_avg_1000/$dir/$out_name") or die "can't open output file $out_name: $!\n";

my @array = <HANDEL>;
$sum=0;
my $moving = $ARGV[2];
my $length=scalar @array;

for ($j=0; $j<=($length-$moving); $j++)
{
	for ($i=$j; $i<($j+$moving); $i++)
	{
	
	$sum=$sum+$array[$i];

	}

#print "sum =$sum\n";

	$mean= $sum/$moving;

	print OUT "$mean\t";

	for ($k=$j; $k<($j+$moving); $k++)
	{
	$y = $array[$k]-$mean;

	$sq = $y**2;
	$s= $s+$sq;

	}
#	print "$s\n";

	$x= $s/($moving-1);

#	print "$x\n";

	$sd = sqrt($x);

	print OUT "$sd\n";
	
	$mean = 0; $y = 0;$s = 0;$sq = 0; $x = 0; $sd = 0; $sum = 0;


}
exit;
