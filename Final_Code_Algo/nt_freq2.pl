#!/usr/bin/perl
# since we will be using a file, and just one file, we can put it's
# name into a variable for ease of handling later on. Not needed, but
# makes it easier to modify later if we want to be able to open other
# files
my $fna_file = $ARGV[0];
 
# we set a hash for the counts
my %count_nucl = ();
 
# we make an array for the nucleotides we want to count
my @nucls = qw( A T G C ); # note that I eliminated AT and GC from the list
 
# now we open the file and read it with a while, and count
open( my $FNA,"<","$fna_file" );
while(<$FNA>) {
    next if( m{^>} ); # this one eliminates identifier lines!
    # here loop to go through the list:
    for my $nucl ( @nucls ) {
        $count_nucl{"$nucl"} += s/$nucl/$nucl/g;
    }
}
close($FNA);
 
# Now we are printing keys and values, so we can use a loop:
# changed from before to go in the order of the list
for my $nucl ( @nucls ) {
    print $nucl," = ",$count_nucl{"$nucl"},"\n";
}
 
# calculate and print GC and AT contents:
my $GC = $count_nucl{"G"} + $count_nucl{"C"};
my $AT = $count_nucl{"A"} + $count_nucl{"T"};
my $GC_cont = $GC/($GC + $AT);
my $AT_cont = $AT/($GC + $AT);
print "GC = ",$GC,"\n";
print "AT = ",$AT,"\n";
print "GC content = ",sprintf("%.2f",$GC_cont),"\n";
print "AT content = ",sprintf("%.2f",$AT_cont),"\n";
