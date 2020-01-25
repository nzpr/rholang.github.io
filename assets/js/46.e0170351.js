(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{279:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},780:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(54),a=(r(88),r(20),r(34),r(279)),s=r(1),i=(s.default.config.optionMergeStrategies,{VueRemarkRoot:a.a}),d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===Object(n.a)(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},c=s.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"Running RNode (Docker)"};var h=function(e){e.options[u]&&(e.options[u]=l),s.default.util.defineReactive(e.options,u,l),e.options.computed=c.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},p=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"running-rnode-docker"}},[r("a",{attrs:{href:"#running-rnode-docker","aria-hidden":"true"}},[e._v("#")]),e._v("Running RNode (Docker)")]),r("p",[e._v("These are the run commands to start RNode (Docker)")]),r("h2",{attrs:{id:"to-connect-to-an-existing-network"}},[r("a",{attrs:{href:"#to-connect-to-an-existing-network","aria-hidden":"true"}},[e._v("#")]),e._v("To connect to an existing network")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run -it --rm --network rnode-net --name rnode1 -v "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/var/rnode1:/var/lib/rnode rchain/rnode:latest run  --bootstrap "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<bootstrap node address>"')]),e._v(" --map-size "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1099511627776")])])]),r("blockquote",[r("p",[e._v("Docker for Mac will only work with static NAT and port forwarding. network=host does not work on Mac. See RNode supported network configuration for more information on static NAT and port forwarding.")])]),r("ul",[r("li",[e._v("Bootstrap address - Enter the address of the bootstrap node you want to connect with. See RNode bootstrap addresses for bootstrap nodes supported by the RChain core development team.")]),r("li",[e._v("Validator private key - Insert the key if you are a validator of test net, or if you are creating a private network and have a bonds file included in your genesis block.")]),r("li",[e._v("Network configuration - If you want to specify your ports, include --p in the run command. If you want to specify your host, include --host in the run command.")])]),r("h2",{attrs:{id:"create-a-rnode-network"}},[r("a",{attrs:{href:"#create-a-rnode-network","aria-hidden":"true"}},[e._v("#")]),e._v("Create a RNode network")]),r("p",[e._v("If this is your first time running RNode, you need to create a Docker network to support RNode operation. Unless you wipe your Docker system, you only need to do this once.")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker network create rnode-net")])]),r("h2",{attrs:{id:"create-the-data-directory"}},[r("a",{attrs:{href:"#create-the-data-directory","aria-hidden":"true"}},[e._v("#")]),e._v("Create the data directory")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/rnode")])]),r("h2",{attrs:{id:"to-run-a-standalone-node"}},[r("a",{attrs:{href:"#to-run-a-standalone-node","aria-hidden":"true"}},[e._v("#")]),e._v("To run a standalone node")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run -u root -it --network rnode-net --name rnode-server-local -v "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),r("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v('/rnode"')]),e._v(":/var/lib/rnode rchain/rnode:latest run --standalone")])]),r("h2",{attrs:{id:"tips-for-working-with-rnode-in-docker"}},[r("a",{attrs:{href:"#tips-for-working-with-rnode-in-docker","aria-hidden":"true"}},[e._v("#")]),e._v("Tips for working with RNode in Docker")]),r("h3",{attrs:{id:"naming-containers"}},[r("a",{attrs:{href:"#naming-containers","aria-hidden":"true"}},[e._v("#")]),e._v("Naming Containers")]),r("p",[e._v("Once the network is created, the server container will be put into the network, and then referenced by the client. It's easier if you give your server container a name. This is an example of of naming a server 'rnode-server-local'.")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run --name rnode-server-local rchain/rnode:latest")])]),r("h3",{attrs:{id:"using-the---host-flag"}},[r("a",{attrs:{href:"#using-the---host-flag","aria-hidden":"true"}},[e._v("#")]),e._v("Using the --host flag")]),r("p",[e._v("If you want to create a local docker network which consists of some nodes and a bootstrap node, you will have to specify the nodes' addresses with the --host flag. Make sure to not use the nodes' IP addresses for the --host flag. Instead use the hostnames. If the network is called 'rnode-net' and you named a docker container 'rnode-server-local', the hostname of that docker container is 'rnode-server-local.rnode-net'.")]),r("h3",{attrs:{id:"sharing-directories-with-containers"}},[r("a",{attrs:{href:"#sharing-directories-with-containers","aria-hidden":"true"}},[e._v("#")]),e._v("Sharing directories with containers")]),r("p",[e._v("To share a directory with a container use the volume command. You will need to create a directory on your local system that will store all of the RNode related files. Once the directory is created, you can share this directory with the Docker container by using the volume command. Below is an example of how the volume parameter can be specified as part of a run command.")]),r("p",[e._v("RNode requires the path /var/lib/rnode exist on startup. Each instance of RNode requires its own separate /var/lib/rnode directory.")]),r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("docker run -v "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"path to local directory"')]),e._v(":/var")])])])}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof h&&h(p);t.default=p.exports}}]);