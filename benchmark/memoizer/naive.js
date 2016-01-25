'use strict'

module.exports = function memoizer1(fn, Cache, resolver) {

  var memoized = function() {
    var cacheKey = resolver(arguments)

    if (!memoized._cache.has(cacheKey)) {
      memoized._cache.set(cacheKey, fn.apply(this, arguments))
    }

    return memoized._cache.get(cacheKey)
  }

  memoized._cache = new Cache()
  memoized._name = 'memoizer: Naive, cache: ' + memoized._cache._name + ', serializer: ' + resolver._name

  return memoized
}
