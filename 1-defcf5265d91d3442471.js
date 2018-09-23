;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    145: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'graphql', function() {
          return g
        }),
        n.d(t, 'StaticQueryContext', function() {
          return m
        }),
        n.d(t, 'StaticQuery', function() {
          return f
        })
      var a = n(0),
        r = n.n(a),
        i = n(4),
        o = n.n(i),
        c = n(144),
        s = n.n(c)
      n.d(t, 'Link', function() {
        return s.a
      }),
        n.d(t, 'withPrefix', function() {
          return c.withPrefix
        }),
        n.d(t, 'navigate', function() {
          return c.navigate
        }),
        n.d(t, 'push', function() {
          return c.push
        }),
        n.d(t, 'replace', function() {
          return c.replace
        }),
        n.d(t, 'navigateTo', function() {
          return c.navigateTo
        })
      var l = n(35)
      n.d(t, 'waitForRouteChange', function() {
        return l.c
      })
      var u = n(152),
        d = n.n(u)
      n.d(t, 'PageRenderer', function() {
        return d.a
      })
      var p = n(48)
      n.d(t, 'parsePath', function() {
        return p.a
      })
      var m = r.a.createContext({}),
        f = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function g() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      f.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      }
    },
    146: function(e, t, n) {
      'use strict'
      var a = n(154),
        r = n(0),
        i = n.n(r),
        o = n(4),
        c = n.n(o),
        s = n(149),
        l = n.n(s),
        u = n(145),
        d = (n(147), n(50), n(7)),
        p = n.n(d),
        m = [
          { title: 'Home', link: '/' },
          { title: 'Projetos', link: '/projects' },
          { title: 'Stack', link: '/stack' },
          { title: 'Posts', link: '/posts' },
        ],
        f = (function(e) {
          function t(t) {
            var n
            return (
              ((n = e.call(this, t) || this).handleMenu = function() {
                n.setState(function(e) {
                  return { isMenuOpen: !e.isMenuOpen }
                })
              }),
              (n.closeMenu = function() {
                return n.setState({ isMenuOpen: !1 })
              }),
              (n.render = function() {
                var e = n.props.siteTitle,
                  t = n.state.isMenuOpen ? 'is-active' : ''
                return i.a.createElement(
                  'nav',
                  { className: 'navbar' },
                  i.a.createElement(
                    'div',
                    { className: 'container' },
                    i.a.createElement(
                      'div',
                      { className: 'navbar-brand' },
                      i.a.createElement(
                        u.Link,
                        {
                          className: 'navbar-item is-size-4',
                          to: '/',
                          onClick: n.closeMenu,
                        },
                        e
                      ),
                      i.a.createElement(
                        'button',
                        {
                          className: 'navbar-burger has-text-light ' + t,
                          type: 'button',
                          'aria-label': 'menu',
                          onClick: n.handleMenu,
                        },
                        i.a.createElement('span', { 'aria-hidden': 'true' }),
                        i.a.createElement('span', { 'aria-hidden': 'true' }),
                        i.a.createElement('span', { 'aria-hidden': 'true' })
                      )
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'navbar-menu ' + t },
                      i.a.createElement(
                        'div',
                        { className: 'navbar-end' },
                        m.map(function(e) {
                          return i.a.createElement(
                            u.Link,
                            {
                              className: 'navbar-item is-size-5',
                              to: e.link,
                              key: e.title,
                              onClick: n.closeMenu,
                            },
                            e.title
                          )
                        })
                      )
                    )
                  )
                )
              }),
              (n.state = { isMenuOpen: !1 }),
              n
            )
          }
          return p()(t, e), t
        })(r.Component),
        g = (n(166), n(168)),
        h = n.n(g),
        v = n(169),
        y = n.n(v),
        b = function(e) {
          var t = e.children
          return i.a.createElement(u.StaticQuery, {
            query: '3067373562',
            render: function(e) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  l.a,
                  null,
                  i.a.createElement('html', { lang: 'pt' }),
                  i.a.createElement('title', null, e.site.siteMetadata.title),
                  i.a.createElement('meta', {
                    name: 'description',
                    content:
                      'Desenvolvedor Front-end, criando apps e páginas Web',
                  }),
                  i.a.createElement('meta', {
                    name: 'keywords',
                    content:
                      'React, Node, Gatsby, Front-end, desenvolvedor, API',
                  }),
                  i.a.createElement('meta', {
                    property: 'og:url',
                    content: e.site.siteMetadata.url,
                  }),
                  i.a.createElement('meta', {
                    property: 'og:type',
                    content: 'website',
                  }),
                  i.a.createElement('meta', {
                    property: 'og:title',
                    content: e.site.siteMetadata.title,
                  }),
                  i.a.createElement('meta', {
                    property: 'og:description',
                    content:
                      'Desenvolvedor Front-end, criando apps e páginas Web',
                  }),
                  i.a.createElement('meta', {
                    property: 'og:image',
                    content: '' + e.site.siteMetadata.url + y.a,
                  }),
                  i.a.createElement('meta', {
                    property: 'og:alt',
                    content:
                      'Desenvolvedor Front-end, criando apps e páginas Web',
                  }),
                  i.a.createElement('meta', {
                    property: 'og:type',
                    content: 'image/jpg',
                  }),
                  i.a.createElement('meta', {
                    property: 'og:width',
                    content: '1365',
                  }),
                  i.a.createElement('meta', {
                    property: 'og:height',
                    content: '1365',
                  }),
                  i.a.createElement('link', {
                    rel: 'preload',
                    href: h.a,
                    as: 'font',
                  })
                ),
                i.a.createElement(f, { siteTitle: e.site.siteMetadata.title }),
                i.a.createElement('div', null, t)
              )
            },
            data: a,
          })
        }
      b.propTypes = { children: c.a.node.isRequired }
      t.a = b
    },
    152: function(e, t, n) {
      var a
      e.exports = ((a = n(164)) && a.default) || a
    },
    154: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Luan Orlandi',
              url: 'https://luanorlandi.github.io/gatsby-course',
            },
          },
        },
      }
    },
    164: function(e, t, n) {
      'use strict'
      n.r(t)
      n(36)
      var a = n(0),
        r = n.n(a),
        i = n(4),
        o = n.n(i),
        c = n(71),
        s = n(1),
        l = function(e) {
          var t = e.location,
            n = s.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
            c.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          )
        }
      ;(l.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = l)
    },
    166: function(e, t, n) {},
    168: function(e, t, n) {
      e.exports =
        n.p +
        'static/DroidSansMonoPowerline-a306541924149a48d9b1f4c8b1b9c446.otf'
    },
    169: function(e, t, n) {
      e.exports =
        n.p + 'static/luanorlandi-7606c19d2c8b47776729b2bdec1fa9a7.jpg'
    },
  },
])
//# sourceMappingURL=1-defcf5265d91d3442471.js.map
