# HTMD - Hyper Text Markdown Documentation

This tool converts a Markdown file, or many Markdown files into a single HTML document.

# Installation

You can install The HTMD tool via NPM

    $ npm install htmd

# Usage

HTMD has a command line interface, you execute it by passing it the directory which holds your markdown documents.

It will then parse all the found Markdown files and generate the equivalent Markup then save it to a single HTML file.

    $ htmd ~/myMarkdown

The above command will read through all the Markdown files I have in the _myMarkdown_ folder then output a file called **output.html** which will contain the equivalent Markup.
If I want to provide my own name and path for the output I can via the **--output** argument.

    $ htmd ~/myMarkdown --output ~/myMarkup/documentation.html

There is a short form of the flag which I can also use:

    $ htmd ~/myMarkdown -o ~/myMarkup/documentation.html

**Note**: HTMD is looking for files with the *.md* extension.

## Development

After checking out the repo, run `npm install` to install dependencies.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bvanderlaan/htmd. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

