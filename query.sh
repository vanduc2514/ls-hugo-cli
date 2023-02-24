echo Find All Public Pages Query

node query.js

node query.js sample \
"[:find (pull ?p [*]) :where [?p :block/properties ?pr] [(get ?pr :public) ?t] [(= true ?t)][?p :block/name ?n]]"

# node query.js sample \
# "[:find ?e ?a ?v :where [?e ?a ?v]]"

# docker run --rm -it $(docker build .)