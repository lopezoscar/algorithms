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

/*
void existeValor(treenode *hoja, int valor){
    if(hoja != NULL && hoja->dato != valor){
        existeValor(hoja->izq,valor);
        existeValor(hoja->der,valor);
    }else{
        printf("Termino o encotro\n");
        if(hoja->dato == valor){
            printf("Encontro valor\n");
        }else{
            printf("NO EXISTE el valor\n");
        }
    }
}
*/
int existeValor(treenode *hoja, int valor){
    if(hoja != NULL && hoja->dato != valor){
        int resultado = existeValor(hoja->izq,valor);
        if(resultado == 1){
            return 1;
        }else{
            resultado = existeValor(hoja->der,valor);
            if(resultado == 1){
                return 1;
            }else{
                return 0;
            }
        }
    }else{

        if(hoja == NULL){
            return 0;
        }else{
            return 1;
        }


    }
}

int cantidad(treenode *hoja,int acc){
    if(hoja != NULL){
        int res = cantidad(hoja->izq,acc);
        res = cantidad(hoja->der,res);
        int toSum = res+1;
        return toSum;
    }
    return acc;
}

int promedio(treenode *hoja,int acc,int *cont,int base){

    if(hoja != NULL && hoja->dato % base == 0){
        printf("ACC %d cont %d base %d \n",acc,*(cont),base);

        printf("DATO %d\n",hoja->dato);
        int res = promedio(hoja->izq,acc,cont,base);
        res = promedio(hoja->der,res,cont,base);
        *(cont) = *(cont)+1;
        printf("CONT ++ %d\n",*(cont));

        int toSum = res + hoja->dato;
        printf("TO SUM %d\n",toSum);

        return toSum;
    }
    return acc;
}

/*
int divisores(treenode *hoja,int cont,int base){
    if(hoja != NULL && (hoja->izq != NULL || hoja->der != NULL) ){
        int res = divisores(hoja->izq,cont,base);
        res = divisores(hoja->der,res,base);
        return res;
    }else{
        if(hoja != NULL && base % hoja->dato == 0){
            cont++;
        }
        return cont;
    }
}
*/


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

/*
    int valorABuscar;
    printf("Ingrese un valor a busca \n");
    scanf("%d",&valorABuscar);

    int resultado = existeValor(arbol,valorABuscar);
    if(resultado == 1){
        printf("Encontro valor\n");
    }else{
        printf("NO Encontro valor\n");
    }
*/
/*
    int acc = 0;
    int result = cantidad(arbol,acc);
    printf("Cantidad de nodos %d",result);
*/

/*
    int base = arbol->dato;
    int cont = 0;

    int acc = 0;
    acc = promedio(arbol,acc,&cont,base);

    printf("ACC MAIN %d \n",acc);
    printf("CONT MAIN %d \n",cont);
    printf("Promedio %f \n",((float)acc/(float)cont));
*/

    printf("\n");
    int cont = 0;
    int base = arbol->dato;
    int result = divisores(arbol,cont,base);
    printf("DIVISORES %d\n",result);

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

