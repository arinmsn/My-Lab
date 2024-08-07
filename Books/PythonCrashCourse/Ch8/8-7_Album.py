# Write a function called make_album() that builds a dictionary
# describing a music album. The function should take in an artist name and an
# album title, and it should return a dictionary containing these two pieces of
# information. Use the function to make three dictionaries representing different
# albums. Print each return value to show that the dictionaries are storing the
# album information correctly.

# Add an optional parameter to make_album() that allows you to store the
# number of tracks on an album. If the calling line includes a value for the num-
# ber of tracks, add that value to the album’s dictionary. Make at least one new
# function call that includes the number of tracks on an album.


def make_album(artist_name, album_title, numOfTracks = 0):
    Dict = {'Artist Name': artist_name, 'Album Title': album_title, "No. of tracks" : numOfTracks }
    print(Dict)
    # optional parameter that allows you
    # to store the # of tracks on an album

make_album("The Beatles", "Abbey Road (1969)")
make_album("Queen", "Greatest hits (1981)")
make_album("Michael Jackson", "Thriller")

make_album("The Beatles", "Abbey Road (1969)", 10)