needs(dplyr)
attach(input[[1]])
model_pca<-glm(Tss~.,a,family = "binomial")
res<-predict(model_pca, a, type = "response")
# con <- textConnection(a)
# data <- read.csv(con)
# close(con)
# data
#data_80bp<-read.csv(,sep=",",header=TRUE)
#data_80bp
#data_80bp<-read.csv("/home/sahil/Documents/Tss_Prediction_SubGroups/TssDataPoints/Organism_Combined_425-505/PCA_predicted_tss_80bp.csv", sep = ",", header = TRUE)
#model_pca<-glm(tss~(Axis1+Axis2+Axis3+Axis4+Axis5),data_80bp,family = "binomial")
#save(model_pca, file = "mymodel.rda")
#load(file = "mymodel.rda")
#res<-predict(model_pca, data_80bp, type = "response")
#table(Actualvalue=data$Tss, Predictedvalue=res>=0.42)


