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

	v = v.replace(/\bThe\s*Trump\b/gi, "The Darklord");
	v = v.replace(/\bDonald\s*J[.]?\s*Trump\b/gi, "Lord Voldemort");
	v = v.replace(/\bDonald\s*Trump\b/gi, "He-Who-Must-Not-Be-Named");
	v = v.replace(/\bDonald\s*John\s*Trump\b/gi, "Thomas Riddle");
	v = v.replace(/\bTrump\b/gi, "You-Know-Who");
	v = v.replace(/\bRepublican\b/gi, "Slytherin");
	v = v.replace(/\bG\.?O\.?P\.?\b/gi, "Slytherin");

	textNode.nodeValue = v;
}


