#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

typedef struct arbol
{
    int dato;
    struct arbol *izq;
    struct arbol *der;
}treenode;

void crear (treenode **hoja);
void insertar(treenode **hoja, int elem);
void mostrar (treenode *hoja);
void sumatoria(treenode *hoja,int *contador);

int main ()
{

    printf ("arboles\n");
    treenode* arbol=NULL;

    crear (&arbol);
    printf ("**************\n");
    printf ("mostrar arbol\n");
    printf ("***************\n");

    mostrar (arbol);
    printf("\n");
    preorden(arbol);
    printf("\n");
    postorden(arbol);

    int contador = 0;
    sumatoria(arbol,&contador);

	printf("Sumatoria %d", contador);

    return 0;
}


void crear (treenode **hoja)
{
    int numero;

    printf ("ingrese numero\n");
    scanf ("%d",&numero);
    while (numero!=-1)
    {

        insertar(&(*hoja),numero);
        printf ("ingrese numero\n");
        scanf ("%d",&numero);
    }
}

void insertar (treenode **hoja,int elem)
{
    int numero=elem;
    if (elem==-1)
        return;
    if (*hoja==NULL)
    {
        //creo la hoja vacia
        (*hoja)=(treenode*)malloc(sizeof(treenode));
        (*hoja)->dato=elem;
        (*hoja)->der=NULL;
        (*hoja)->izq=NULL;
    }else{




    if (numero>(*hoja)->dato)
    {

        insertar (&(*hoja)->der,elem);

    }
    else
    {

        insertar (&(*hoja)->izq,elem);
    }
    }
return;
}


void preorden (treenode *hoja)
{
    if (hoja!=NULL)
    {
        printf("%d ",hoja->dato);
        preorden(hoja->izq);
        preorden(hoja->der);

    }
    return;
}

void postorden (treenode *hoja)
{
    if (hoja!=NULL)
    {
        postorden(hoja->izq);
        postorden(hoja->der);
        printf("%d ",hoja->dato);

    }
    return;
}

void sumatoria(treenode *hoja,int *contador){
    if(hoja != NULL){
        if(hoja->der != NULL && hoja->izq != NULL && hoja->dato % 2 == 0){
            printf("CONT %d \n",*(contador)+1);
            *(contador) = *(contador)+1;
        }
	}
}

void mostrar (treenode *hoja)
{
    if (hoja!=NULL)
    {
        mostrar(hoja->izq);
        printf("%d ",hoja->dato);
        mostrar(hoja->der);

    }
    return;
}

