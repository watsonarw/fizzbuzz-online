# fizzbuzz-online
Fizzbuzz as a service - yes, it has come to this.

## What even is this?

This is FizzBuzz, as a service.

### What's FizzBuzz?

FizzBuzz is an (unfortunately) common interview question used by far too many companies.
An example of how this could be asked:

> Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

### Why do I need this then?

FizzBuzz is terrible, and if you're applying for a job where they ask you to do FizzBuzz, you should run the other way. But before you do, submit your solution by calling this service, and using the response.

### How do I use it?
It's simple. In your language of choice, shell out, and curl the API. Then use the JSON response, and format it as specified in the question.

**Is this a horrible solution?** Yes. *But it's only as horrible as the question.*

Examples:

**Ruby**

```ruby
  require 'json'
  JSON.parse(`curl "fizzbuzz.online/solve/from/1/to/100"`).join(' ')
```

**Shell**

```sh
curl "fizzbuzz.online/solve" | sed -e 's/[\"\[\]]*/''/g' | sed -e 's/,/ /g'
```

## Contributing

Make a pull request with your changes. We have CI, and it will deploy automatically.

[![Build Status](https://snap-ci.com/watsonarw/fizzbuzz-online/branch/master/build_image)](https://snap-ci.com/watsonarw/fizzbuzz-online/branch/master)
