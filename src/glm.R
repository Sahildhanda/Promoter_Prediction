needs(dplyr)
attach(input[[1]])

load(file = paste("./src/",model,sep=""))
res<-predict(model_pca, data, type = "response")
data$prob<-res
data$result<-ifelse(res>=prob,1,0)
data
#result<-ifelse(res>=prob,1,0)