// Config -d
var disqus_config = function () {
};
var d = document;
var s = d.createElement('script');
s.async = true;
s.src = '//' + "{{ . }}" + '.disqus.com/embed.js';
s.setAttribute('data-timestamp', + new Date());
(d.head || d.body).appendChild(s);