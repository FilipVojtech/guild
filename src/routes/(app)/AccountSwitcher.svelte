<div id='switcher'>
	<div class='row' id='character'>
		<div class='button' id='profile'>Niklas Eeroson</div>
		<div class='button' id='options'>v</div>
	</div>
	<hr>
	<div class='button row' id='user'>Falcon</div>
</div>

<style lang='postcss'>
    .row {
        #profile {
            flex-grow: 1;
        }

        #options {
            padding: 0 10px;
        }

        display: flex;
        padding: 10px 5px;
		font-weight: bold;
    }

    #switcher {
        border-radius: 15px;
        border: 3px solid;
    }

    .button {
        &:hover {
            filter: opacity(0.5);
        }

        cursor: pointer;
    }
</style>
