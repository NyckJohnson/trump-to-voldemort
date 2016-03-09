walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/The\s*Trump/gi, "The Darklord");	
	v = v.replace(/The\s*Donald/gi, "He-Who-Must-Not-Be-Named");
	v = v.replace(/Donald\s*J[.]?\s*Trump/gi, "Lord Voldemort");
	v = v.replace(/Donald\s*Trump/gi, "Someone With Tiny Hands");
	v = v.replace(/Donald\s*John\s*Trump/gi, "Thomas Riddle");
	v = v.replace(/The\s*Party\s*Of\s*Lincoln/gi, "The Party of Drumpf");
	v = v.replace(/Make\s*America\s*Great\s*Again/gi, "Make America Great Britain Again");
	v = v.replace(/Trump/gi, "You-Know-Who");
	v = v.replace(/Republican/gi, "Slytherin");
	v = v.replace(/G\.?O\.?P\.?/gi, "Slytherin");

	textNode.nodeValue = v;
}


